
FROM node:20-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --save-dev

COPY . /app

EXPOSE 3000

CMD ["npx", "next", "dev"]

