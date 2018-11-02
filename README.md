## Motivation

I setup this to learn how to use `docker-compose`

## How to use?

This repository is an accompaniment to the Blog post - [Setting up a multi-container application using Docker-compose](https://dsinecos.github.io/blog/Multi-container-application-using-docker-compose). Refer the Blog post to understand how to build a multi-container setup using `docker-compose`

This repository represents the final code to run multiple containers including a
- RabbitMQ server
- RabbitMQ consumer written in Node.js
- RabbitMQ publisher written in Node.js

The initial environment for this repository was setup using [node-project-boilerplate](https://github.com/dsinecos/node-project-boilerplate). Refer the README in that repository to use debugger

## Running the multi-container setup

### To run RabbitMQ Server and RabbitMQ consumer

`docker-compose -f docker-compose.dev.yml up --build`

### To run RabbitMQ publisher

`docker exec -it <container-id-for-rabbitmq-consumer> sh`

`node sendMessage.js`