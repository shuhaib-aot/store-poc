# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /forms/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /forms/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /forms/app/webpack.config.js
COPY package-lock.json /forms/app/package-lock.json
COPY package.json /forms/app/package.json

RUN npm ci --production
COPY . /forms/app/
RUN npm run build

EXPOSE 3003
CMD ["npm", "run", "build:start"]

