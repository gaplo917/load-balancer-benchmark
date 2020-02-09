# apahce vs nginx

```
sh bombardier.sh http://10.170.0.2:8080/100 ./benchmark-result/ n1-standard-1-apache-prefork
```

```
# add to /etc/hosts on the load balancer VM
10.170.0.2 backend

```
