FROM ubuntu

RUN  apt update
RUN  apt install -y nodejs npm


WORKDIR /src
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm i

ENTRYPOINT [ "node" , "index.js" ]