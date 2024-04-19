FROM node:21-alpine as base
WORKDIR /app
COPY ./package*.json .
ENV FRONTEND_PORT=${FRONTEND_PORT}
ENV BACKEND_URL=${BACKEND_URL}
#This is not a secret talk to Casey
ENV VITE_KINDE_FRONTEND_CLIENT_ID=c52ad20bbf7244a4b6bc8de92bcddf5f 
ENV VITE_KINDE_DOMAIN=https://freedhardemanuniversity.kinde.com
EXPOSE ${FRONTEND_PORT}


FROM base as prod

ENV VITE_KINDE_REDIRECT_URL=https://bekindlytodayfrontend.onrender.com
ENV VITE_KINDE_LOGOUT_URL=https://bekindlytodayfrontend.onrender.com
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
ENV VITE_ENVIROMENT=dev
ENV VITE_KINDE_REDIRECT_URL=https://localhost:${FRONTEND_PORT}
ENV VITE_KINDE_LOGOUT_URL=http://localhost:${FRONTEND_PORT}
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]