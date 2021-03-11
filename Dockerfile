FROM node:stretch-slim

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN npm run db:seed

EXPOSE 8080

CMD ["node", "server/index.js"]