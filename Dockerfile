FROM node:16-alpine
WORKDIR /server
COPY package.json .
RUN yarn
COPY . .
EXPOSE 5000
CMD ["yarn", "start"]