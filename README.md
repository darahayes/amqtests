# AMQ Playground

This repo is a collection of basic resources to help you play with Red Hat AMQ locally.

This repo contains a `docker-compose.yml` file that lets you run an AMQ broker using the simplest possible configuration. This is useful if you want to write some quick code that talks to AMQ without the massive hassle of running OpenShift or directly installing extra software on your machine.

The docs only have guides on how to install the software directly on your machine and on deploying it in OpenShift.

# Prerequisites

You must have the following software on your machine.

- Docker
- Node.js

## Start the AMQ container

```bash
docker-compose up
```

## Install the required dependencies

```bash
$ npm install
```

## Run the Example Scriot

The example script uses the `rhea` module to connect to the broker and send a message.

```bash
$ node index.js
Hello World!
```

## More Examples

With this set up. You can now attempt to run the examples from the `rhea` github repo which are pretty useful.

https://github.com/amqp/rhea#examples
