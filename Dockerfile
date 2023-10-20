FROM node:16.14.0-alpine3.14 AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /src

RUN pnpm config set disturl https://npmmirror.com/mirrors/node/
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm config set sass_binary_site https://npmmirror.com/mirrors/node-sass/
RUN pnpm config set sharp_binary_host https://npmmirror.com/mirrors/sharp
RUN pnpm config set sharp_libvips_binary_host https://npmmirror.com/mirrors/sharp-libvips

COPY package.json pnpm-lock.yaml .npmignore ./

RUN pnpm install

COPY . .

RUN pnpm build
RUN pnpm install --prod

FROM node:16.14.0

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /src/.next/ /app/.next/
COPY --from=builder /src/node_modules/ /app/node_modules/
COPY --from=builder /src/public/ /app/public/
COPY --from=builder /src/package.json /src/pnpm-lock.yaml /src/next.config.js /app/

EXPOSE 3000

ENTRYPOINT [ "node_modules/.bin/next", "start"]