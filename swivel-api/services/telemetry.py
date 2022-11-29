from http.client import REQUESTED_RANGE_NOT_SATISFIABLE
import sqlite3
import json
from flask import Blueprint, request
from requests import ResponseSuccess, ResponseError
from cache import cache

# Change this path to somewhere near root?
DB_PATH = "swivel.db"
TelemetryService = Blueprint("telemetry_service", __name__)
# GET /telemetry/<DEVICE_ID>/
# POST /telemetry/<DEVICE_ID>/
# GET /state/current/<DEVICE_ID>/
# POST /state/<DEVICE_ID>/


@TelemetryService.route("/<device_id>", methods=["GET", "POST"])
def telemetry(device_id):
    if request.method == "POST":
        reqdata = request.json
        cache.telemetrycache[device_id] = reqdata
        # For use with databases
        # conn = sqlite3.connect(DB_PATH)
        # cursor = conn.cursor()
        # cursor.execute("BEGIN TRANSACTION")
        # cursor.execute("DELETE FROM DeviceTelemetry WHERE id = ?", device_id)
        # cursor.execute("INSERT INTO DeviceTelemetry(id, latitude, longitude, acceleration) values (?, ?, ?, ?)", tuple(reqdata.items))
        # cursor.execute("COMMIT TRANSACTION")
        # conn.commit()
        # resp = ResponseSuccess({"Success": "POST"})
        resp = ResponseSuccess(reqdata)
    if request.method == "GET":
        if str(device_id) in cache.telemetrycache:
            resp = ResponseSuccess(cache.telemetrycache[device_id])
        else:
            resp = ResponseError(["Device not in list"], 1)
        # For use with databases
        # conn = sqlite3.connect(DB_PATH)
        # cursor = conn.cursor()
        # records = cursor.execute(
        #     "SELECT * FROM DeviceTelemetry WHERE id = ?", device_id
        # ).fetchall()
        # resp = ResponseSuccess(records[0])
    return resp.encode_json()
