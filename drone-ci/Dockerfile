FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html/dist
COPY drone-ci/nginx.conf /etc/nginx/conf.d/default.conf
CMD sh -c 'echo ">>>$NORMAL_SERVICE_PORT_WEB1" && if [ "$NORMAL_SERVICE_PORT_WEB1" = "" ];then export NORMAL_SERVICE_PORT_WEB1=80;fi && sed -i "s/NGINX_PORT/"$NORMAL_SERVICE_PORT_WEB1"/g" /etc/nginx/conf.d/default.conf && echo ">>>$NORMAL_SERVICE_PORT_WEB1" && nginx -g "daemon off;"'