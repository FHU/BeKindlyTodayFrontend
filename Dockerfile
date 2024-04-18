FROM node:21-alpine as base
WORKDIR /app
COPY ./package*.json .
ENV FRONTEND_PORT=${FRONTEND_PORT}
ENV BACKEND_URL=${BACKEND_URL}
EXPOSE ${FRONTEND_PORT}


FROM base as prod

ENV VITE_ENVIROMENT=prod

RUN addgroup react && adduser -S -G react react

USER react

USER root
RUN chown -R react:react . 

USER react
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview" ]


FROM base as dev
ENV VITE_ENVIROMENT=${VITE_ENVIROMENT}
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]