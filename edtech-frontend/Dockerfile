FROM node:14

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN yarn install

EXPOSE 8080

CMD ["yarn", "serve"]