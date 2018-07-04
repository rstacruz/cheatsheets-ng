FROM mhart/alpine-node:10.5.0
RUN apk update && apk add make bash
RUN mkdir -p /app
WORKDIR /app
