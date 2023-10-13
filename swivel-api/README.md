# swivel-app

## Getting Started

The setup this project uses is best suited for VSCode. You may use other editors, however, you must then follow code style guidelines and lint your code manually if no automation is available.

Once you open the `swivel-api` project in VSCode it will ask you to install some recommended extensions. Install these. If you are not prompted to install the extensions, the following are necessary:
- Python - Microsoft Language Extension

The `.vscode` folder configures some shared settings. For instance, it sets the Python extension's linter to `black`, a library you will install later with pip automatically. In VSCode you can simply save your code to have it formatted for you. If you are using another editor that does not support this integration, you will need to lint the code with the following command: `python3.9 -m black .`

Set up the environment by installing the following tools:
- [Python v3.9+](https://www.python.org/downloads/) (`python --version`)
- pip - Package Manager (usually installed with Python, platform dependent)
- [Python3 venv](https://docs.python.org/3/library/venv.html) - Virtual environment, can be installed with pip

Inside the `swivel-api` folder create yourself a virtual environment. All depedencies installed in this environment will not clash with your system level python dependencies. A new folder called "venv" will appear inside your work directory.

```
python3.9 -m venv ./venv
```

Activate your virtual environment by running the activation script.
```bash
# On Linux / Mac
source ./venv/bin/activate
# On Windows
.\venv\bin\activate
```

At this point you can install all the required dependencies.
```
python3.9 -m pip install -r requirements.txt
```

Create a file in the root `swivel-api` project directory titled `.env`, you will use this to configure your environment. You can paste the contents of the `.sample.env` file into that file. Configure how you like, most default configuration will be included.

You should now be ready to develop.

## Developing

You can start the API by running the following command.

```
python3.9 main.py
```

If you add any dependencies, make sure they go in the `requirements.txt`

```
python3.9 -m pip freeze > requirements.txt
```

## Testing and Communicating with the API

The currently supported routes on the API are as follows:
```
GET /status/ping/ #for checking server status
GET /telemetry/<DEVICE_ID>/ #returns telemetry information of device, latitude, longitude, acceleration
POST /telemetry/<DEVICE_ID>/ #Allows device to post its telemetry
GET /control/current/<DEVICE_ID>/ #returns current control information of device
POST /control/<DEVICE_ID>/ #Allows app to post the actions it wants the device to take. Request should provide a json body containing device_id, action, time of submittal
POST /control/complete/<DEVICE_ID> #Allows device to post successful completion of action. No body requirements. Success is assumed
=======
GET /status/ping/
GET /telemetry/<DEVICE_ID>/
POST /telemetry/<DEVICE_ID>/
GET /control/current/<DEVICE_ID>/
POST /control/<DEVICE_ID>/
```
