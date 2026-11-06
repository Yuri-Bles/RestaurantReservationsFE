FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY artifact/ .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY artifact/ /usr/share/nginx/html

EXPOSE 80