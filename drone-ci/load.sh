#!/bin/bash


prepare(){
    echo ">>>$NORMAL_SERVICE_PORT_WEB1" 

    if [ "$NORMAL_SERVICE_PORT_WEB1" = "" ];
        return true
    fi 

    sed -i "s/NGINX_PORT/"$NORMAL_SERVICE_PORT_WEB1"/g" /etc/nginx/conf.d/default.conf

    echo ">>>$NORMAL_SERVICE_PORT_WEB1" 

    nginx -g "daemon off;"
}

prepare
