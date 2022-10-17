FROM node:14

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install
RUN yarn global add knex -g
RUN yarn global add serverless -g

COPY wait-for-it.sh .
RUN chmod +x /usr/src/app/backend/wait-for-it.sh

EXPOSE 3001

CMD ["npm", "start"]