FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

#COPY ssl /etc/nginx/ssl

EXPOSE 80
#EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
