import sqlite3
import json
from xmlrpc.client import ResponseError
from flask import Blueprint, request, jsonify
from requests import ResponseSuccess

DB_PATH = "swivel.db"
ControlService = Blueprint("control_service", __name__)

@ControlService.route("/current/<device_id>", methods = ["GET"])
def getState(device_id):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    records = cursor.execute("SELECT * FROM DeviceStatus WHERE id = ?", device_id).fetchall()
    if len(records) != 0:
        resp = ResponseSuccess(records[0])
        return resp.encode_json()
    return "Record not found", 400
#Request should provide a json body containing device_id, action, time of submittal
@ControlService.route("/<device_id>", methods = ["POST"])
def postState(device_id):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    reqdata = request.json
    reqdata = json.load(reqdata)
    cursor.execute("BEGIN TRANSACTION")
    cursor.execute("DELETE FROM DeviceStatus WHERE id = ?", device_id)
    cursor.execute("INSERT INTO DeviceStatus(id, action, status, submittedAt, completedAt) values (?, ?, 'pending', ?, NULL)", tuple(reqdata.items))
    cursor.execute("COMMIT TRANSACTION")
    conn.commit()
    resp = ResponseSuccess({"Success": "POST"})
    return resp.encode_json()

@ControlService.errorhandler(ResponseError)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response