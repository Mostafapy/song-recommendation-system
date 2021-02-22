const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// DB
const connectDB = require('./config/db');

// Routes
const routes = require('./routes/index');

// Load env vars
dotenv.config({ path: '.env' });

// connect to MongoDB
connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
   app.use(
      morgan((tokens, req, res) =>
         [
            `<${process.env.NODE_ENV}>`,
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'),
            '-',
            tokens['response-time'](req, res),
            'ms',
         ].join(' '),
      ),
   );
}

// Mount the routes
app.use(routes);

// Port
const port = process.env.PORT || '3000';

// Listen
const server = app.listen(port, () =>
   console.log(`App Listen Successfully To Port ${port}`),
);

// Unhandled Promise Rejection Handler
process.on('unhandledRejection', ex => {
   console.error(`${ex.message}`, ex);
   app.use((_req, res) => {
      res.status(500).json({
         success: false,
         msg: '500 Internet Error',
         data: null,
      });
   });

   server.close(() => process.exit(1));
});