FROM node:14

WORKDIR /web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install app dependencies
COPY ./web/package.json ./web/package.json
COPY ./web/package-lock.json ./web/package-lock.json
RUN npm install --silent
RUN npm install react-scripts -g --silent

# add app
COPY ./web /web

EXPOSE 3000
# start app
CMD ["npm", "start"]