# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /src
COPY . .
RUN yarn install --production
ENTRYPOINT ["yarn start"]
EXPOSE 3000
