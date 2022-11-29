
import json
import datetime
from xmlrpc.client import ResponseError
from flask import Blueprint, request, jsonify
from requests import ResponseSuccess
from cache import cache

HeliumService = Blueprint("helium_service", __name__)

@HeliumService.route("/device", methods=["GET", "POST"])
def device():
    if request.method =="POST":
        reqdata=request.json
        print(reqdata)
        resp = ResponseSuccess(reqdata)
    if request.method =="GET":
        reqdata=request.json
        print(reqdata)
        resp = ResponseSuccess(reqdata)
    return resp.encode_json()