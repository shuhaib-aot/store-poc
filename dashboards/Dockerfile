# base image
FROM node:16.17.0-alpine as build-stage

# set working directory
WORKDIR /dashboards/app

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# add `/app/node_modules/.bin` to $PATH
ENV PATH /dashboards/app/node_modules/.bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# install and cache app dependencies

COPY webpack.config.js /dashboards/app/webpack.config.js
COPY package-lock.json /dashboards/app/package-lock.json
COPY package.json /dashboards/app/package.json

RUN npm ci --production
COPY . /dashboards/app/
RUN npm run build

EXPOSE 3005
CMD ["npm", "run", "serve"]


