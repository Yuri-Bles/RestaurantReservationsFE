FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY artifact/ .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
