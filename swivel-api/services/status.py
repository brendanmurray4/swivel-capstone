from flask import Blueprint
from common import ResponseSuccess

DB_PATH = "swivel.db"
StatusService = Blueprint("status_service", __name__)


@StatusService.route("/ping", methods=["GET"])
def hello():
    resp = ResponseSuccess({"message": "pong"})
    return resp.encode_json()
