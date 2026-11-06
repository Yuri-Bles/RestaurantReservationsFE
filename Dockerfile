FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY artifact/ .

EXPOSE 5173

ENTRYPOINT ["nginx", "-g", "daemon off;"]
