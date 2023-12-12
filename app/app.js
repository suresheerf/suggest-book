import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';

import { HOST_URL, whitelist } from './config.js';
import globalErrHandler from './utils/errorHandler.js';

import studentRouter from './student/routes.js';
import bookRouter from './book/routes.js';

const app = express();

// middleware

app.use(
  morgan(
    (tokens, req, res) =>
      JSON.stringify({
        method: tokens.method(req, res),
        url: tokens.url(req, res),
        status: Number.parseFloat(tokens.status(req, res)),
        content_length: tokens.res(req, res, 'content-length'),
        response_time: Number.parseFloat(tokens['response-time'](req, res)),
      }),
    {
      stream: {
        write: (message) => logger.info('accessLog', JSON.parse(message)),
      },
    }
  )
);

app.use(helmet());
app.use(xssClean());
app.use(hpp());
app.use(mongoSanitize());
const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));
app.use(express.static('public'));

// routes mounting
app.get("/",(req,res)=>{
    res.status(200).json({message:"Server working..."})
})

app.use('/api/v1/book',bookRouter);
app.use('/api/v1/student', studentRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling
app.use(globalErrHandler);

export default app;
