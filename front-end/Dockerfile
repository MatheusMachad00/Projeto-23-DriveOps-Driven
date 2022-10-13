FROM node:16

WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

RUN mkdir -p /var/www/hmtl
RUN mv build/* /var/www/hmtl

WORKDIR /

RUN rm -rf /app