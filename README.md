# Apahce vs Nginx vs Haproxy vs Traefik

TODO

# Development
```
docker-compose -f docker-compose-dev.yml up --build

# Test Traefik Config
curl http://localhost:8080

# Test Haproxy Config
curl http://localhost:8081

# Test Nginx Config
curl http://localhost:8082

# Test Apache Config
curl http://localhost:8083

```

# Benchmark on Production
Replace `backend.c.tiny-projectsss.internal` with your backend DNS

#### Load balancer
```
# Nginx
sudo docker-compose -f docker-compose-nginx.yml up

# Apache Prefork
sudo docker-compose -f docker-compose-apache-prefork.yml up

# Apache worker
sudo docker-compose -f docker-compose-apache-worker.yml up

# Apache Event
sudo docker-compose -f docker-compose-apache-event.yml up

# Traefik
sudo docker-compose -f docker-compose-traefik.yml up

# Haproxy
sudo docker-compose -f docker-compose-haproxy.yml up

```

### Backend
```
sudo docker-compose -f docker-compose-node-backend.yml up --build
```

### Benchmark client
```
./bench http://lb.c.tiny-projectsss.internal:8080/io ./benchmark-result/n1-highcpu-8-nginx 30s 4000
```
