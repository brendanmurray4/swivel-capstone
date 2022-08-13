from flask import Blueprint, request, jsonify, g
import sqlite3
from requests import ResponseSuccess
import json
from connect_db import get_db
#Change this path to somewhere near root?
DB_PATH = "swivel.db"
StatusService = Blueprint("status_service", __name__)
# GET /telemetry/<DEVICE_ID>/
# POST /telemetry/<DEVICE_ID>/
# GET /state/current/<DEVICE_ID>/
# POST /state/<DEVICE_ID>/


@StatusService.route("/telemetry/<device_id>", methods=['GET', 'POST'])
def telemetry(device_id):
    if request.method == 'POST':
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        reqdata = request.json
        reqdata = json.load(reqdata)
        cursor.execute("BEGIN TRANSACTION")
        cursor.execute("DELETE FROM DeviceTelemetry WHERE id = ?", device_id)
        cursor.execute("INSERT INTO DeviceTelemetry(id, latitude, longitude, acceleration) values (?, ?, ?, ?)", tuple(reqdata.items))
        cursor.execute("COMMIT TRANSACTION")
        resp = ResponseSuccess({"Success": "POST"})
    if request.method == 'GET':
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        records = cursor.execute("SELECT * FROM DeviceTelemetry WHERE id = ?", device_id)
        resp = ResponseSuccess(records[0])
    
    return resp.encode_json()
