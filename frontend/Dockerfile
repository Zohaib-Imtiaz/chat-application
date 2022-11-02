FROM node:lts-alpine
RUN mkdir frontend
RUN cd frontend
WORKDIR /frontend
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000