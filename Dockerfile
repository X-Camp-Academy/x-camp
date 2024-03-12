FROM node:18.19.0-alpine3.18 AS builder

WORKDIR /src

RUN yarn config set registry https://registry.npmmirror.com
RUN yarn config set disturl https://npmmirror.com/mirrors/node/
RUN yarn config set sass_binary_site https://npmmirror.com/mirrors/node-sass/
RUN yarn config set sharp_binary_host https://npmmirror.com/mirrors/sharp
RUN yarn config set sharp_libvips_binary_host https://npmmirror.com/mirrors/sharp-libvips

COPY package.json  yarn.lock .npmignore ./

RUN yarn install

COPY . .

RUN yarn build
RUN yarn install --production

FROM node:18.19.0-alpine3.18 AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /src/.next/ /app/.next/
COPY --from=builder /src/node_modules/ /app/node_modules/
COPY --from=builder /src/public/ /app/public/
COPY --from=builder /src/package.json /src/yarn.lock /src/next.config.js /app/

EXPOSE 3000

ENTRYPOINT [ "node_modules/.bin/next", "start"]