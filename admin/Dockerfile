# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /admin/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /admin/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /admin/app/webpack.config.js
COPY package-lock.json /admin/app/package-lock.json
COPY package.json /admin/app/package.json

RUN npm ci --production
COPY . /admin/app/
RUN npm run build
EXPOSE 3001
CMD ["npm","run", "build:start"]


