FROM node:alpine

WORKDIR /app

RUN npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 4004

CMD ["npm", "run", "dev"]