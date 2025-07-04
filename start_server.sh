#!/bin/bash

# Start the HTTP server in the background
python3 -m http.server 8000 &

# Save the process ID of the HTTP server
SERVER_PID=$!

# Function to open the browser
open_browser() {
  xdg-open "http://localhost:8000/index.html"
}

# Open the browser initially
open_browser

# Monitor file changes in the current directory
while inotifywait -r -e modify,create,delete .; do
  open_browser
done

# Kill the HTTP server when the script is interrupted
trap 'kill $SERVER_PID' INT
