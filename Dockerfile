FROM node:14.16.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3333
CMD ["yarn", "start"]
