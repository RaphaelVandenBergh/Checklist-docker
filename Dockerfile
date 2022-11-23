FROM node:lts
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
RUN npx prisma generate
RUN npm run build
CMD [ "npm", "start"]