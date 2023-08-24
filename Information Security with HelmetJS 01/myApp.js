const express = require('express');
const app = express();

const helmet = require("helmet");
const ninetyDaysInSeconds = 90*24*60*60;

//app.use(helmet.frameguard({action: "deny"}))


//app.use(helmet.xssFilter({}))
//app.use(helmet.noSniff())
//app.use(helmet.ieNoOpen())
//app.use(helmet.hsts({ maxAge: ninetyDaysInSeconds, force: true }))
//app.use(helmet.dnsPrefetchControl())
//app.use(helmet.noCache())
//app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] }} ))

app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))

