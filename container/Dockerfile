# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /container/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /container/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /container/app/webpack.config.js
COPY package-lock.json /container/app/package-lock.json
COPY package.json /container/app/package.json

RUN npm ci --production
COPY . /container/app/
RUN npm run build

FROM nginx:1.22 as production-stage

RUN mkdir /app
COPY --from=build-stage /container/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
