# This script will create a test database for API testing
# Script can be edited to provide deeper test cases
# INSTRUCTIONS
# - Run testdb.py
# - Run main.py
# - Navigate to <URL given in console>/status/current/<TEST_DEVICE_ID> OR
# - Navigate to <URL given in console>/telemetry/<TEST_DEVICE_ID>
import sqlite3
import os

TEST_DEVICE_ID = 1

os.remove("swivel.db")
if os.path.exists("swivel.db"):
    os.remove("swivel.db")

conn = sqlite3.connect("swivel.db")
cursor = conn.cursor()

# Create and prep test table for DeviceStatus
cursor.execute(
    "CREATE TABLE DeviceStatus (id INT PRIMARY KEY, action CHAR(10), status CHAR(10), submittedAt datetime, completedAt datetime)"
)
cursor.execute(
    "INSERT INTO DeviceStatus(id, action, status, submittedAt, completedAt) values (?, 'unlock', 'pending', 'November 18, 1999', NULL)",
    (TEST_DEVICE_ID,),
)

# Create and prep test table for DeviceTelemetry
cursor.execute(
    "CREATE TABLE DeviceTelemetry (id INT PRIMARY KEY, latitude FLOAT, longitude FLOAT, acceleration FLOAT)"
)
cursor.execute(
    "INSERT INTO DeviceTelemetry values (?, 49.277748, -122.90905, 0)",
    (TEST_DEVICE_ID,),
)
conn.commit()
conn.close()
