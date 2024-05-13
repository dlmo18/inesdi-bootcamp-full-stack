FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Bind your app to port 8080
EXPOSE 8080

CMD [ "node", "server.js" ]
#CMD [ "node", "server_solution.js" ]
#docker run --name mongodb-container --hostname mongodb-container -d -p 27017:27017 --network mynetwork -v <YOUR-PATH-VOLUME-DIRECTORY>:/data/db users