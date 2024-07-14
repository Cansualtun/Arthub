FROM node:20.15.0-alpine3.20

COPY . .
RUN npm install --ignore-scripts
RUN npm run build

CMD npm run start