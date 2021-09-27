# technical-takeaway-task-pickles

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Architecture
<img src='./assets/Architecture.png'/>


## Mysql Database 


1. create database 
2. goto users/src/app.module.ts file changes database details(host, username, password, database)



## Installation
run
```bash
$ npm install
```

## Running the app


Run on users floder 
1. Open comment prompts cd users 
2. enter npm install 
<img src='./assets/users-running-cmd.png'/>

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Run on email floder 
1. Open comment prompts cd email 
2. enter npm install 
<img src='./assets/email-running-cmd.png'/>

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Test API

```bash
Open Postman 
http://localhost:8000/api/user/:name/:email/:age
1. Name string format
2. Email must be use valid that send to mail  
3. age number
look like better as below

http://localhost:8000/api/user/mahendran/mahendrancse88@gmail.com/28
```
<img src='./assets/postman.png'/>

<img src='./assets/postman-output-png'/>
<img src='./assets/mail-1.png'/>