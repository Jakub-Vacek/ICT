# ICT test

Simple test server 

# Structure
* authorization - service for basic authorization
    
* card-validity - card validity service layer

* card-status - card status service layer

* logger - simple winston logger

* status - application status service layer

* web - handles user interaction with server

# Routes

* http://localhost:3000/swagger - API swagger documentation

* http://localhost:3000/status - application status

* http://localhost:3000/cards/:id - card info

## Installation

```bash
npm install
```
## Build

```bash
npm run build
```

## Run

```bash
npm run start
```

## Test

```bash
npm test
```

## Web GUI

-   [Default](http://localhost:3000)

## Curl

working example:

```bash
curl http://localhost:3000/status
curl --user admin:root http://localhost:3000/cards/6
```
