import json
import datetime
import base64
import requests
from flask import Blueprint, request, jsonify
from requests import ResponseSuccess, ResponseError, APIError
from cache import cache

HeliumService = Blueprint("helium_service", __name__)

@HeliumService.route("/device", methods=["GET", "POST"])
def device():
    if request.method =="POST":
        reqdata=request.json
        if reqdata['type'] == 'join':
            #resp = ResponseSuccess(cache.telemetrycache[0])
            #return ResponseSuccess(cache.telemetrycache[0]["state"]).encode_json()
            if cache.telemetrycache["0"]:
                messagestring = "state:" + str(cache.telemetrycache["0"]["state"])
            else:
                messagestring = "state:0"
            sendtodevice("76e573ed-d95c-422d-add7-896b62fe6995", "shJTLo6BC4waLuK_E67Uo1m5Z4tRBhlY", "76e573ed-d95c-422d-add7-896b62fe6995", messagestring)
        elif reqdata['type'] == 'uplink':
            #GPS data
            stringdata = str(reqdata)
            data = stringdata.split(';')
            cache.telemetrycache["0"] = {"location":data[0], "state":data[1],"battery":data[2]}
            resp = ResponseSuccess(data)
    if request.method =="GET":
        stringdata = str(request.data)
        datadict = json.loads(stringdata)
    return resp.encode_json()


@HeliumService.route("/unlock", methods=["POST"])
def unlock():
    try:
        sendtodevice("76e573ed-d95c-422d-add7-896b62fe6995", "shJTLo6BC4waLuK_E67Uo1m5Z4tRBhlY", "76e573ed-d95c-422d-add7-896b62fe6995", "unlock")
    except Exception as e:
        print(e)
        return ResponseError([APIError("HELIUM_NETWORK_FAIL_SEND", str(e))], 500)
    return ResponseSuccess({"message":"success"})

def sendtodevice(integrationid, downlinkkey, device_id, messagestring):
    message_bytes = messagestring.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode('ascii')
    jsonbody = {"payload_raw": base64_message, "port": "1", "confirmed" : "false"}
    url = "https://console.helium.com/api/v1/down" + "/" + str(integrationid) + "/" + str(downlinkkey) + "/" + str(device_id)
    requests.post(url, json = jsonbody)