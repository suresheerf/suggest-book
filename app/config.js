/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-restricted-syntax */
import { config } from 'dotenv';

config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 4000;
export const { DBURI } = process.env;
export const HOST_URL = `http://localhost:${PORT}`;
export const whitelist = process.env.whitelist.split(',');

const CONFIG = {
  NODE_ENV,
  PORT,
  DBURI,
  HOST_URL,
  whitelist,
};

export default CONFIG;
