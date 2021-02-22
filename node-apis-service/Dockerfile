FROM node:11-alpine 

RUN mkdir -p /node-service

WORKDIR /node-service

COPY package.json /node-service

RUN npm install

COPY . /node-service

CMD [ "npm", "run", "start" ]

