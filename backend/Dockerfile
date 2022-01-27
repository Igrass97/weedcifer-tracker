FROM node:14-alpine
WORKDIR /usr/src/wcf-be
COPY . .
RUN npm i
ENTRYPOINT ["node", "app.js"]