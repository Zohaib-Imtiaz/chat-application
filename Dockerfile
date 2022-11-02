FROM node:lts-alpine
RUN mkdir backend
RUN cd backend
WORKDIR /backend
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3100