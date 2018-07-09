import json
import os
import re
import sys
from random import randrange

import serial.tools.list_ports
from websocket import WebSocketBadStatusException, create_connection

SENSOR_SERVER_NETLOC = os.environ.get("SENSOR_SERVER_NETLOC", "127.0.0.1:5000")
WEBSOCKET_URI = f"ws://{SENSOR_SERVER_NETLOC}/sensor_data"

print(f"Opening WebSocket connection to {WEBSOCKET_URI}")
try:
    ws = create_connection(WEBSOCKET_URI)
except WebSocketBadStatusException as err:
    print(f"Error opening WebSocket connection to {WEBSOCKET_URI}: {err}")
    sys.exit(1)


port = next(
    (p for p in serial.tools.list_ports.comports() if p.pid == 516 and p.vid == 3368),
    None,
)
if port:
    ser = serial.Serial(port.device)
    ser.baudrate = 115200
    print(f"Listening on USB {port}")
else:
    print("No USB port found. Sending one-shot test data.")

while True:
    line = ser.readline().decode() if port else f"l={randrange(10)}"
    m = re.match(r"(\w+)[:=](-?\d+(?:\.\d*)?)", line)
    if m:
        key, value = m.groups()
        key = key.lower()
        value = float(value) if "." in value else int(value)
        print(f"{key}={value}")
        data = json.dumps({key: value})
        ws.send(data)
    else:
        print("unmatched", line.strip())
    if not port:
        break
