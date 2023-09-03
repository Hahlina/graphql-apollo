FROM nginx:latest

#COPY nginx.conf /etc/nginx/nginx.conf
#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY configs/backend.conf /etc/nginx/sites-enabled/backend.conf
#COPY ssl /etc/nginx/ssl

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
