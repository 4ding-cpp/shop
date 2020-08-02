FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html/dist
COPY drone-ci/server.conf /etc/nginx/conf.d/default.conf
COPY drone-ci/load.sh /bin/load.sh
RUN chomd 755 /bin/load.sh
CMD sh /bin/load.sh