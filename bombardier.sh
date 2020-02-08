#!/bin/bash
mkdir -p $2;

echo "running warmup...";
~/bombardier --http1 -o json -p result -c 50 -d 30s -l $1 | jq '.' | tee "$2/warmup.json" > /dev/null;

sleep 5;

for value in 50 125 250 500 1000 2000 4000
do
  echo "running concurrency = $value";
  ~/bombardier --http1 -o json -p result -c $value -d 30s -l $1 | jq '.' | tee "$2/c$value.json" > /dev/null;
  sleep 5;
done
