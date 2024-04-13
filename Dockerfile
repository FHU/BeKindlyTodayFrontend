FROM node:21-alpine as base
WORKDIR /app
COPY ./package*.json .
ENV FRONTEND_PORT=${FRONTEND_PORT}
ENV BACKEND_URL=${BACKEND_URL}
EXPOSE ${FRONTEND_PORT}


FROM base as prod

RUN addgroup react && adduser -S -G react react

USER react

USER root
RUN chown -R react:react . 

USER frontend
RUN npm ci
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview" ]


FROM base as dev

RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]