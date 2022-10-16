FROM node:16.13.2-alpine
WORKDIR /app
COPY youlink/ ./
RUN apk update

CMD ["yarn", "dev"]