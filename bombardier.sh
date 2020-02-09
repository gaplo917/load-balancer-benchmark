#!/bin/bash
mkdir -p $2;

echo "running warmup...";
docker run -ti --rm --network=host --ulimit nofile=20000:40000 alpine/bombardier --http1 -o json -p result -c 1000 -n 50000 -t 60s -l $1 | jq '.' | tee "$2/warmup.json" > /dev/null;

sleep 5;

for value in 800 1600 3200 6400
do
  echo "running concurrency = $value";
  docker run -ti --rm --network=host --ulimit nofile=20000:40000 alpine/bombardier --http1 -o json -p result -c $value -n 50000 -t 60s -l $1 | jq '.' | tee "$2/c$value.json" > /dev/null;
  sleep 5;
done
