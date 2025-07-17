FROM node:20-alpine

Workdir /app

COPY package.json ./
RUN npm install -g @angular/cli
RUN npm install -g @ionic/cli
RUN npm install 

COPY . .

EXPOSE 8100
CMD ["ionic", "serve", "--host=0.0.0.0"]    


