import sqlite3
import json
from flask import Blueprint, request
from requests import ResponseSuccess

DB_PATH = "swivel.db"
StatusService = Blueprint("status_service", __name__)


@StatusService.route("/ping", methods=["GET"])
def hello():
    resp = ResponseSuccess({"message": "pong"})
    return resp.encode_json()

@StatusService.route("/current/<device_id>", methods = ["GET"])
def getStatus(device_id):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    records = cursor.execute("SELECT * FROM DeviceStatus WHERE id = ?", device_id).fetchall()
    resp = ResponseSuccess(records[0])
    return resp.encode_json()

#Request should provide a json body containing device_id, action, time of submittal
@StatusService.route("/<device_id>", methods = ["POST"])
def postStatus(device_id):
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