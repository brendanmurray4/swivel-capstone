from Flask import Blueprint, request, jsonify, g
from requests import ResponseSuccess
import pyodbc
import json
from connect_db import get_db

StatusService = Blueprint("status_service", __name__)

@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'azure_db'):
        g.azure_db.close()

@StatusService.route("/telemetry/<device_id>", methods=['GET', 'POST'])
def telemetry(device_id):
    if request.method == 'POST':
        conn = get_db()
        data = request.json
        data = json.load(data)
        conn.autocommit = False
        conn.execute("DELETE FROM DeviceTelemetry WHERE id = ?", device_id)
        conn.execute("INSERT INTO DeviceTelemetry(id, latitude, longitude, acceleration) values (?, ?, ?, ?)", tuple(data.items))
        conn.autocommit = True
        resp = ResponseSuccess({"Success": "POST"})
    if request.method == 'GET':
        conn = get_db()
        cursor = conn.execute("SELECT * FROM DeviceTelemetry WHERE id = ?", device_id)
        records = cursor.fetchall()
        resp = ResponseSuccess(records[0])
    return resp.encode_json()
