FROM node:13.0.1-alpine as build-step

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

ENV PATH /usr/src/node_modules/.bin:$PATH

EXPOSE 4200

CMD npm run start