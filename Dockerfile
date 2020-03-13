FROM node

WORKDIR /home/pi/code/discord-bot/src/

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "index.js" ]