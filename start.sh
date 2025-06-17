#!/bin/sh

# Start the Socket.IO server in the background
cd /socket && node socketServer.js &

# Start Nginx in the foreground
nginx -g 'daemon off;' 