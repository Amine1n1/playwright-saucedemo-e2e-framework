import 'dotenv/config';

export const lockedOutUser = {
  username: process.env.LOGIN_LOCKED_OUT_USER!,
  password: process.env.LOGIN_PASSWORD!,
};