FROM node:16.13.2-alpine
WORKDIR /app
COPY youlink/ ./

RUN apk update
RUN yarn global add firebase-tools

CMD ["yarn", "dev"]