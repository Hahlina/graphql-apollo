FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
#COPY default.conf /etc/nginx/conf.d/default.conf
RUN unlink /var/log/nginx/access.log
RUN unlink /var/log/nginx/error.log
#COPY ssl /etc/nginx/ssl

EXPOSE 80
#EXPOSE 443

#CMD ["nginx", "-g", "daemon off;"]
