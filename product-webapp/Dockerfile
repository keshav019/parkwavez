FROM node:18.16.0
WORKDIR /app
COPY src/main/resources/static/ /app
RUN npm install -g http-server
EXPOSE 8099
CMD ["http-server", "-p", "8099", "-c-1", "."]