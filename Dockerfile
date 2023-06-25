FROM node:20-slim

WORKDIR /app

COPY . .
RUN apt-get update -y && apt-get install -y openssl
RUN npm install
RUN npx prisma generate

CMD ["npm", "start"]