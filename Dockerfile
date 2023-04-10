FROM node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 5173


CMD [ "npm", "start" ]