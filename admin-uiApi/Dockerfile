FROM node AS base
ENV PORT 81
ENV S_PORT 444
ENV HTTPS off
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE ${PORT} 
EXPOSE ${S_PORT}
WORKDIR /app
COPY package.json .
RUN npm install

FROM base AS development
RUN npm install nodemon -g
COPY . .
RUN npm run build

FROM base AS production
COPY . .
ENV NODE_PATH=./dist
RUN npm run build