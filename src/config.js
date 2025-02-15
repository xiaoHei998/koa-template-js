const { ENV_PRODUCTION } = require("./constant");

console.log(process.env.NODE_ENV, "process.env");
const isPro = process.env.NODE_ENV === ENV_PRODUCTION;

require("dotenv").config({
  path: isPro ? "./.env.production" : "./.env.development",
});
