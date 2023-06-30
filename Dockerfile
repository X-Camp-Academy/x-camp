FROM node:16.14.0-alpine3.14 AS builder

WORKDIR /src

RUN yarn config set registry https://registry.npmmirror.com
RUN yarn config set disturl https://npmmirror.com/mirrors/node/
RUN yarn config set sass_binary_site https://npmmirror.com/mirrors/node-sass/
RUN yarn config set sharp_binary_host https://npmmirror.com/mirrors/sharp
RUN yarn config set sharp_libvips_binary_host https://npmmirror.com/mirrors/sharp-libvips

COPY package.json yarn.lock .yarnclean ./

RUN yarn install

COPY . .

RUN yarn build
RUN yarn --production

FROM node:16.14.0

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /src/.next/ /app/.next/
COPY --from=builder /src/node_modules/ /app/node_modules/
COPY --from=builder /src/public/ /app/public/
COPY --from=builder /src/package.json /src/yarn.lock /src/next.config.js /app/

EXPOSE 3000

ENTRYPOINT [ "node_modules/.bin/next", "start"]