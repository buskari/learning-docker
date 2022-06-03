FROM node:14-alpine

WORKDIR /home/server

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]