# build stage
FROM node as build-stage
WORKDIR /app
ADD . .
RUN npm install easy-circular-progress
RUN npm install jquery
RUN yarn install
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]