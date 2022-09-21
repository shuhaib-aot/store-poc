# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /process/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /process/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /process/app/webpack.config.js
COPY package-lock.json /process/app/package-lock.json
COPY package.json /process/app/package.json

RUN npm ci --production
COPY . /process/app/
RUN npm run build

EXPOSE 3004
CMD ["npm", "run", "build:start"]

