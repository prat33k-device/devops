FROM node:14-alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

# just copying json file first because npm install needs that, to minimize build time and leveraging caching
COPY ./ ./

CMD ["npm", "start"]