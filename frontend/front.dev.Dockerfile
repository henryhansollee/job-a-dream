FROM node:lts-alpine 
WORKDIR /app 
# ADD package*.json ./ 
ADD . ./ 
RUN npm install && npm run build
CMD npm run serve -- --port 8000
