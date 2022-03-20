# base image
FROM node:alpine


WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /app/package.json

RUN npm install

RUN npm install @vue/cli -g


copy . /app

expose 8080


CMD ["npm","run","serve"]