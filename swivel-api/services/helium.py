import regex
import json
import datetime
import base64
import requests
from xmlrpc.client import ResponseError
from flask import Blueprint, request, jsonify
from requests import ResponseSuccess
from cache import cache

HeliumService = Blueprint("helium_service", __name__)

@HeliumService.route("/device", methods=["GET", "POST"])
def device():
    if request.method =="POST":
        reqdata=request.data
        stringdata = str(reqdata)
        datadict = json.loads(stringdata)
        if datadict['type'] == 'join':
            #resp = ResponseSuccess(cache.telemetrycache[0])
            return ResponseSuccess(cache.telemetrycache[0]["state"]).encode_json()
        elif datadict['type'] == 'uplink':
            #GPS data
            stringdata = str(reqdata)
            data = stringdata.split(';')
            cache.telemetrycache[0] = {"location":data[0], "state":data[1],"battery":data[2]}
            resp = ResponseSuccess(data)
    if request.method =="GET":
        stringdata = str(request.data)
        datadict = json.loads(stringdata)
    return resp.encode_json()

def sendtodevice(integrationid, downlinkkey, device_id, jsonbody):
    url = "https://console.helium.com/api/v1/down" + "/" + str(integrationid) + "/" + str(downlinkkey) + "/" + str(device_id)
    requests.post(url, json = jsonbody)