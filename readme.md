# Divercity Devops challenge

## Context  

We have 2 services running under nodeJS, we want to deploy those services to allow our users to use them.

- The first service `service1` has two endpoints `/data` and `/version`, this service runs on port 3000.
- The second service `service2` has one endpoint `/linked-data` and runs under port 3001, `service2` depends on `service1`.
- `service2` expects to get the link to `service1` using env var called `SERVICE_LINK`, this will allow `service2` to get the necessary data from `service1`.

## Our goal  

The goal from this challenge is to build a web service that allows the 3 endpoints under the same domain

## Requirements

- create a dockerfile for each service.
- Use nginx as a reverse proxy to serve both services under the same hood like this :
  - `/data` and `/version` served from `service1`.

  - `/linked-data` servce from `service2`.
  
We noticed that `service1` is always under heavy load so we decided to scale up and use two instances for it.

- Update the nginx configuration to create a load balancer to serve `service1`.

- Create a deployment script that build docker images, sets nginx custom configuration and serves the app.

## Nice to have

It would be a plus if you :  

- Set up a monitoring solution with different metrics.
- Set up an alarm service that sends an email whenver the status of the services are critical.

## Deliverables  

- Fork this repo, update it with all configuration files and add to it a readme file with the instructions.

PS: you are not allowed to change the code of the two serivces.
