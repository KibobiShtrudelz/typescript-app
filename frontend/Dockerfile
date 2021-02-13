# pull official base image
FROM node:alpine

# set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# COPY package*.json ./
# RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
