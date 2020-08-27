#!/bin/bash


prepare() {
    if [ "$SHOP_SERVICE_HOST" = "" ]; then
        return "env SHOP_SERVICE_HOST not set"
    fi
    if [ "$SHOP_SERVICE_PORT" = "" ]; then
        return "env SHOP_SERVICE_PORT not set"
    fi
    if [ "$HTTP_SERVICE_HOST" = "" ]; then
        return "env HTTP_SERVICE_HOST not set"
    fi
    if [ "$HTTP_SERVICE_PORT" = "" ]; then
        return "env HTTP_SERVICE_PORT not set"
    fi
    
    sed -i "s/GRPC_HOST/"$SHOP_SERVICE_HOST"/g" /etc/nginx/conf.d/default.conf
    sed -i "s/GRPC_PORT/"$SHOP_SERVICE_PORT"/g" /etc/nginx/conf.d/default.conf
    sed -i "s/HTTP_HOST/"$HTTP_SERVICE_HOST"/g" /etc/nginx/conf.d/default.conf
    sed -i "s/HTTP_PORT/"$HTTP_SERVICE_PORT"/g" /etc/nginx/conf.d/default.conf
    
    nginx -g "daemon off;"
}

prepare