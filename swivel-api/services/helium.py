import base64
import requests
from flask import Blueprint, request, Response
from common import ResponseSuccess, ResponseError, APIError
from cache import cache
from http import HTTPStatus

HeliumService = Blueprint("helium_service", __name__)

@HeliumService.route("/device", methods=["POST"])
def device():
    data=request.json
    if data['type'] == 'join':
        # Send through the device state
        send_to_main("state:1")
    if data['type'] == 'uplink':
        # Update our local state
        pass
    return ResponseSuccess({ 'status': HTTPStatus.OK }).encode_json()


@HeliumService.route("/unlock", methods=["POST"])
def unlock():
    try:
        send_to_main("unlock")
    except Exception as e:
        print(e)
        return ResponseError([APIError("HELIUM_NETWORK_FAIL_SEND", str(e))], HTTPStatus.INTERNAL_SERVER_ERROR).encode_json(), HTTPStatus.INTERNAL_SERVER_ERROR
    return ResponseSuccess({"message":"success"})


def send_to_main(raw_message = "") -> Response:
    return send_to_device(
        "76e573ed-d95c-422d-add7-896b62fe6995",
        "shJTLo6BC4waLuK_E67Uo1m5Z4tRBhlY",
        "2add8aa4-46ac-40e3-b2d1-672e3939b0bf",
        raw_message
    )

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