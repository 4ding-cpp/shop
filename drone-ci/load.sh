#!/bin/bash


prepare() {
    if [ "$WEB1_SERVICE_PORT" = "" ]; then
        return "env WEB1_SERVICE_PORT not set"
    fi
    sed -i "s/NGINX_PORT/"$WEB1_SERVICE_PORT"/g" /etc/nginx/conf.d/default.conf

    if [ "$SHOP_SERVICE_HOST" = "" ]; then
        return "env SHOP_SERVICE_HOST not set"
    fi
    sed -i "s/GRPC_HOST/"$SHOP_SERVICE_HOST"/g" /etc/nginx/conf.d/default.conf

    if [ "$SHOP_SERVICE_PORT" = "" ]; then
        return "env SHOP_SERVICE_PORT not set"
    fi
    sed -i "s/GRPC_PORT/"$SHOP_SERVICE_PORT"/g" /etc/nginx/conf.d/default.conf
    
    nginx -g "daemon off;"
}

prepare