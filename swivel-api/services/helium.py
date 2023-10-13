import base64
import requests
from flask import g, Blueprint, request, Response, current_app
from common import ResponseSuccess, ResponseError, APIError
from http import HTTPStatus

HeliumService = Blueprint("helium_service", __name__)

state = {
    'lat': 49.277748,
    'long': -122.90905,
    'alert': 0,
    'name': 'GT Aggressor',
    'location': 'Seymour Drive',
    'rating': '4.7/5',
    'price': '4.21',
    'time': '5d 2h',
    'image': '../../../assets/bikeSelection/actual_Bike.jpg',
    'theft_detection': True,
    'rented': False,
    'on_platform': False,
    'username': '',
    'lock_state': False,
    'battery': 95.
}

@HeliumService.route("/device", methods=["POST"])
def device():
    data=request.json

    if data['type'] == 'join':
        # Send through the device state
        theft_detection_state = 0
        if state['theft_detection'] == True:
            theft_detection_state = 1
        send_to_main("state:%d" % (theft_detection_state))
    if data['type'] == 'uplink':
        # Update our local state
        payload = data['payload']
        payload_decoded = base64_to_text(payload)
        print("(%s) -> (%s): %s" % (data['name'], data['hotspots'][0]['name'], payload_decoded))
        tokens = payload_decoded.split(";")
        if not tokens:
            return ResponseError([APIError('NO PAYLOAD', 'no payload data')], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json()
        nmea_strings = tokens[0].split(",")
        for string in nmea_strings:
            if not string:
                return ResponseError([APIError('IMPROPER GPS DATA', 'improper gps data')], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json()
        lat = latitude(nmea_strings[2], nmea_strings[3])
        long = longitude(nmea_strings[4], nmea_strings[5])
        state["lat"] = lat
        state["long"] = long
        state["battery"] =  tokens[1]
        state['alert'] = tokens[2]

    return ResponseSuccess({ 'status': HTTPStatus.OK }).encode_json()

@HeliumService.route("/gps", methods = ["POST"])
def post_gps():
    data = request.json
    state["lat"] = data["lat"]
    state["long"] = data["long"]
    return ResponseSuccess({ 'status': HTTPStatus.OK }).encode_json()

@HeliumService.route("/app", methods = ["GET", "POST"])
def app_telemetry():
    if request.method == "GET":
        resp = ResponseSuccess(state)
        return resp.encode_json()
    if request.method == "POST":
        data = request.json
        for item in data.keys():
            state[item] = data[item]
        if state['rented'] == True:
            set_theft_detection(0)
        else:
            set_theft_detection(1)
    return ResponseSuccess({ 'status': HTTPStatus.OK }).encode_json()

@HeliumService.route("/device/sentry/<value_str>", methods=["POST"])
def send_state(value_str: str):
    value = None
    try:
        value = int(value_str)
    except ValueError as e:
        print(e)
        return ResponseError([APIError('INVALID_VALUE', 'set a valid value for sentry mode')]).encode_json()

    try:
        state['theft_detection'] = value > 0
        if state['theft_detection'] == True:
            send_to_main("state:1")
        else:
            send_to_main("state:0")
    except Exception as e:
        print(e)
        return ResponseError([APIError("HELIUM_NETWORK_FAIL_SEND", str(e))], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json(), HTTPStatus.INTERNAL_SERVER_ERROR
    return ResponseSuccess({"message":"success"}).encode_json()

@HeliumService.route("/device/unlock", methods=["POST"])
def unlock():
    try:
        send_to_main("unlock")
    except Exception as e:
        print(e)
        return ResponseError([APIError("HELIUM_NETWORK_FAIL_SEND", str(e))], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json(), HTTPStatus.INTERNAL_SERVER_ERROR
    return ResponseSuccess({"message":"success"}).encode_json()

#Takes a 0 or a 1, 0 for theft off, 1 for theft on
def set_theft_detection(state):
    try:
        send_to_main("state:%d" %(state))
    except Exception as e:
        print(e)
        return ResponseError([APIError("HELIUM_NETWORK_FAIL_SEND", str(e))], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json(), HTTPStatus.INTERNAL_SERVER_ERROR
    return ResponseSuccess({"message":"success"}).encode_json()

def latitude(t: str, dir: str):
    if dir == "W":
        return -1*(float(t[0:2]) + float(t[2:11])/60)
    return (float(t[0:2]) + float(t[2:11])/60)

def longitude(t: str, dir: str):
    if dir == "S":
        return -1*(float(t[0:3]) + float(t[3:11])/60)
    return (float(t[0:3]) + float(t[3:11])/60)


def send_to_main(raw_message = "") -> Response:
    return send_to_device(
        "76e573ed-d95c-422d-add7-896b62fe6995",
        "shJTLo6BC4waLuK_E67Uo1m5Z4tRBhlY",
        "2add8aa4-46ac-40e3-b2d1-672e3939b0bf",
        raw_message
    )

def base64_to_text(raw_message = ""):
    base64_bytes = raw_message.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    message = message_bytes.decode('ascii')
    return message

def send_to_device(integration_id, downlink_key, device_id = "", raw_message = "") -> Response:
    message_bytes = raw_message.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode('ascii')
    jsonbody = {
        "payload_raw": base64_message,
        "port": "1",
        "confirmed" : "false"
    }
    url = "https://console.helium.com/api/v1/down/%s/%s/%s" % (integration_id, downlink_key, device_id)
    return requests.post(url, json = jsonbody)