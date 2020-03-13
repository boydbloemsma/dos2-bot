FROM node

WORKDIR /home/boyd/code/discord-bot

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "./src/index.js" ]