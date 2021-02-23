#!/bin/bash
echo "--------------------------------------------------------------------"
echo "------------------------------- Sound Recommendation -------------------------------"
echo "--------------------------------------------------------------------"

echo "Pull New Changes (main)"
sleep 1
git pull origin main

echo "Stop Docker Images (Production)"
docker-compose -p sound-recommendation-app stop

echo "Build And Deploy New Docker Images (Production)"
sleep 1
docker-compose -p sound-recommendation-app up --build -d

echo "Delete Old Docker Images"
sleep 1
docker image prune -f
