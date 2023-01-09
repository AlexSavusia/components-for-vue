# Set the base image to nodejs
FROM node:16.18.0-slim

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN npm install npm@8.19.2 -g \
    && npm install --no-audit --no-fund

RUN npm run build

ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]