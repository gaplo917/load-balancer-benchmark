#!/bin/bash
mkdir -p $2;

echo "running warmup...";
docker run -ti --rm --network=host alpine/bombardier --http1 -o json -p result -c 50 -n 50000 -t 60s -l $1 | jq '.' | tee "$2/warmup.json" > /dev/null;

sleep 5;

for value in 500 1000 2000 4000 8000
do
  echo "running concurrency = $value";
  docker run -ti --rm --network=host alpine/bombardier --http1 -o json -p result -c $value -n 50000 -t 60s -l $1 | jq '.' | tee "$2/c$value.json" > /dev/null;
  sleep 5;
done
