# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /applications/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /applications/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY package-lock.json /applications/app/package-lock.json
COPY package.json /applications/app/package.json

RUN npm ci --production
COPY . /applications/app/
RUN npm run build

EXPOSE 3002
CMD ["npm","run","build:start"]

