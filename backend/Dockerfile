FROM node:14-alpine
WORKDIR /usr/wcf-be
COPY . .
RUN npm i
ENTRYPOINT ["node", "./src/app.js"]