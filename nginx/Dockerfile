FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
#COPY configs/backend.conf /etc/nginx/sites-enabled/backend.conf
#COPY ssl /etc/nginx/ssl

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
