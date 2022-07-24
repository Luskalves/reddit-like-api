require('dotenv').config();

const { env } = process;

const config = {
  username: env.DB_USER || "root",
  password: env.DB_PASS || "root1234",
  database: env.DB_NAME || "reddit_like",
  host: env.DB_HOST || "127.0.0.1",
  dialect: env.DB_DIALECT || "mysql",
  port: env.DB_PORT || "3306",
  dialectOptions: env.DB_OPTIONS ? JSON.parse(env.DB_OPTIONS) : {},
}

module.exports = {
  development: config,
  test: config,
  production: config,
}
