import sqlite3
import json
import datetime
from xmlrpc.client import ResponseError
from flask import Blueprint, request, jsonify
from requests import ResponseSuccess
from cache import cache

DB_PATH = "swivel.db"
ControlService = Blueprint("control_service", __name__)


@ControlService.route("/current/<device_id>", methods=["GET"])
def getState(device_id):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    records = cursor.execute(
        "SELECT * FROM DeviceStatus WHERE id = ?", device_id
    ).fetchall()
    if len(records) != 0:
        resp = ResponseSuccess(records[0])
        return resp.encode_json()
    return "Record not found", 400


@ControlService.route("/<device_id>", methods=["GET"])
def getActions(device_id):
    actions = list(cache.controlcache["actions"])
    resp = ResponseSuccess(actions)
    return resp.encode_json()


# Request should provide a json body containing device_id, action, time of submittal
@ControlService.route("/<device_id>", methods=["POST"])
def postState(device_id):
    # Demo code
    reqdata = request.json
    action = reqdata["actions"]
    if action[0] not in cache.controlcache["actions"]:
        cache.controlcache["actions"].add(action[0])
    # Code for working with database
    # conn = sqlite3.connect(DB_PATH)
    # cursor = conn.cursor()
    #
    # reqdata = json.load(reqdata)
    # cursor.execute("BEGIN TRANSACTION")
    # cursor.execute("DELETE FROM DeviceStatus WHERE id = ?", device_id)
    # cursor.execute(
    #     "INSERT INTO DeviceStatus(id, action, status, submittedAt, completedAt) values (?, ?, 'pending', ?, NULL)",
    #     tuple(reqdata.items),
    # )
    # cursor.execute("COMMIT TRANSACTION")
    # conn.commit()
    actions = list(cache.controlcache["actions"])
    resp = ResponseSuccess(actions)
    return resp.encode_json()


# To remove
@ControlService.route("/complete/<device_id>", methods=["POST"])
def completeControl(device_id):
    reqdata = request.json
    actions = reqdata["actions"]
    for action in actions:
        cache.controlcache["actions"].remove(action)
    # For use with database
    # conn = sqlite3.connect(DB_PATH)
    # cursor = conn.cursor()
    # cursor.execute("BEGIN TRANSACTION")
    # now = datetime.datetime.now()
    # now = now.strftime("%Y-%m-%dT%H:%M:%S")
    # cursor.execute(
    #     "UPDATE DeviceStatus SET status = 'Complete', completedAt = ? WHERE id = ?",
    #     (now, device_id),
    # )
    # cursor.execute("COMMIT TRANSACTION")
    # conn.commit()
    resp = ResponseSuccess({"Success": "Actions removed from actions list"})
    return resp.encode_json()
