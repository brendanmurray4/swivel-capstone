#This script will create a test database for API testing
import sqlite3
import os

os.remove("swivel.db")
conn = sqlite3.connect("swivel.db")
cursor = conn.cursor()

#Create and prep test table for DeviceStatus
cursor.execute("CREATE TABLE DeviceStatus (id INT PRIMARY KEY, action CHAR(10), status CHAR(10), submittedAt datetime, completedAt datetime)")
cursor.execute("INSERT INTO DeviceStatus(id, action, status, submittedAt, completedAt) values (1, 'unlock', 'pending', 'November 18, 1999', NULL)")

#Create and prep test table for DeviceTelemetry
cursor.execute("CREATE TABLE DeviceTelemetry (id INT PRIMARY KEY, latitude FLOAT, longitude FLOAT, acceleration FLOAT)")
cursor.execute("INSERT INTO DeviceTelemetry values (1, 49.277748, -122.90905, 0)")
conn.commit()
conn.close()
