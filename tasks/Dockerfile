# base image
FROM node:18.9.0-alpine3.16 as build-stage

# set working directory
WORKDIR /tasks/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /tasks/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /tasks/app/webpack.config.js
COPY package-lock.json /tasks/app/package-lock.json
COPY package.json /tasks/app/package.json

RUN npm install
COPY . /tasks/app/
RUN npm run build:dev

EXPOSE 3006
CMD ["npm", "start"]

