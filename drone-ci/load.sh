#!/bin/bash


prepare() {
    if [ "$NORMAL_SERVICE_PORT_WEB1" = "" ]; then
        return "env NORMAL_SERVICE_PORT_WEB1 not set"
    fi
    sed -i "s/NGINX_PORT/"$NORMAL_SERVICE_PORT_WEB1"/g" /etc/nginx/conf.d/default.conf

    if [ "$NORMAL_SERVICE_HOST" = "" ]; then
        return "env NORMAL_SERVICE_HOST not set"
    fi
    sed -i "s/GRPC_HOST/"$NORMAL_SERVICE_HOST"/g" /etc/nginx/conf.d/default.conf

    if [ "$NORMAL_SERVICE_PORT_SHOP" = "" ]; then
        return "env NORMAL_SERVICE_PORT_SHOP not set"
    fi
    sed -i "s/GRPC_PORT/"$NORMAL_SERVICE_PORT_SHOP"/g" /etc/nginx/conf.d/default.conf
    
    nginx -g "daemon off;"
}

prepare