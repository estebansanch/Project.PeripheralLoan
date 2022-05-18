# syntax=docker/dockerfile:1
FROM node:16-bullseye
WORKDIR /src
COPY . .
RUN yarn install --production
ENTRYPOINT ["yarn start"]
EXPOSE 3000
