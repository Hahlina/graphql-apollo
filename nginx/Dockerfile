FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY configs/api.conf /etc/nginx/conf.d/api.conf

COPY ssl /etc/nginx/ssl

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
