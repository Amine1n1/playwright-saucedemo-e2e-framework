import 'dotenv/config';

export const validUser = {
  username: process.env.LOGIN_USERNAME ?? 'placeholderUser',
  password: process.env.LOGIN_PASSWORD ?? 'placeholderPass',
};