FROM node:18-alpine as build-deps

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Build stage
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build-deps /usr/src/app ./

EXPOSE 3000

CMD ["node", "index.js"]

# Nginx stage
FROM nginx:alpine

COPY --from=build-deps /usr/src/app /usr/src/app
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]