const productRoutes = require('./routes/product')
const userRoutes = require('./routes/user')
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sucursalRoutes = require('./routes/sucursal')
const ticketRoutes = require('./routes/ticket')
const membershipRoutes = require('./routes/membership')
const empresaRoutes = require('./routes/empresa')


const cors = require('cors')

require('./db.js');

const server = express();
const http = require('http').createServer(server)


server.name = 'API';

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  let whitelist = ['https://www.okayamakaratedo.com.mx', 'https://donmay-front.vercel.app'  ]
  let foundURL = whitelist.includes(req.header('origin').toLocaleLowerCase())
  if(foundURL){
    res.header('Access-Control-Allow-Origin', foundURL); // update to match the domain you will make the request from
  }
  else{
    res.header('Access-Control-Allow-Origin', 'https://donmay-front.vercel.app'); // update to match the domain you will make the request from
    
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', productRoutes);
server.use('/', userRoutes);
server.use('/', sucursalRoutes);
server.use('/', ticketRoutes);
server.use('/', membershipRoutes);
server.use('/', empresaRoutes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = http;
