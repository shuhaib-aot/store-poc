# base image
FROM node:16.17.0-alpine as build-stage

ARG NODE_ENV
ARG COMPONENT_NAME
ARG PORT

ENV NODE_ENV ${NODE_ENV}

# set working directory
WORKDIR /${COMPONENT_NAME}/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /${COMPONENT_NAME}/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies
COPY package-lock.json /${COMPONENT_NAME}/app/package-lock.json
COPY package.json /${COMPONENT_NAME}/app/package.json

RUN npm ci --include dev
COPY . /${COMPONENT_NAME}/app/
RUN npm run build
EXPOSE ${PORT}
CMD ["npm","run", "build:start"]
