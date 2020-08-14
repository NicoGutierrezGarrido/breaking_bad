FROM node:14.1.0-alpine3.11
ENV PORT 3000
ENV PATH /app/node_modules/.bin:$PATH
RUN mkdir /app
WORKDIR /app
EXPOSE 3000
# COPY package* /app/
RUN yarn install
# COPY . /app
# RUN yarn build
# ENTRYPOINT ["yarn", "start"]
# WORKDIR /usr/src/app
# COPY package.json yarn.lock ./
# RUN yarn
# COPY . ./
# RUN yarn build
# FROM nginx:1.12-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]