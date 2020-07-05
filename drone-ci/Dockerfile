FROM nginx:stable-alpine
ARG SERVER_HOST=https://shop.4ding.site
ENV SERVER_HOST=${SERVER_HOST}}
COPY dist /usr/share/nginx/html/dist
COPY drone-ci/nginx.conf /etc/nginx/conf.d/default.conf
CMD [ "nginx", "-g", "daemon off;" ]