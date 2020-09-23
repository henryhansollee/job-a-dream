FROM node:lts-alpine 
WORKDIR /app 
ADD package.json ./ 
ADD . ./ 
CMD yarn install && yarn run serve 
EXPOSE 8080
