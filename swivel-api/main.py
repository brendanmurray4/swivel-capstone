from dotenv import load_dotenv

# Load environment configuration before any other imports to make it's safe to
# use env variables in any imported package.
load_dotenv()

import os
from flask import Flask
from services.status import StatusService
from services.telemetry import TelemetryService
from services.control import ControlService
from services.helium import HeliumService

app = Flask(__name__)
app.register_blueprint(StatusService, url_prefix="/status")
app.register_blueprint(TelemetryService, url_prefix="/telemetry")
app.register_blueprint(ControlService, url_prefix = "/control")
app.register_blueprint(HeliumService, url_prefix = "/helium")

if __name__ == "__main__":
    app.run(host=os.environ.get("API_HOST"), port=os.environ.get("API_PORT"))
