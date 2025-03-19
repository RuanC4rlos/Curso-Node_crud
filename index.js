// Link Aula: https://www.youtube.com/watch?v=IOfDoyP1Aq0&t=3434s
// MongoDB: https://cloud.mongodb.com/v2/67daf945e6d46e0cb13f31fa#/metrics/replicaSet/67dafa0cea872d26385996ab/explorer/test/users/find

// const {Person} = require('./person.js');

const dotenv = require('dotenv');

const connectToDatebase = require('./src/database/connect.js');

dotenv.config();

connectToDatebase();

// require("./modules/path");
// require("./modules/fs");
//require("./modules/http");

require("./modules/express");

// const person = new Person('John Doe');
