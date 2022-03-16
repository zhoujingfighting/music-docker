FROM node:12.14.1

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npmmirror.com" \
    && npm install -g npm husky \
    && npm install --production

EXPOSE 3000