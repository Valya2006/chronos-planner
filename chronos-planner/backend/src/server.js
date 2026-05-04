import Fastify from 'fastify';
import formBody from '@fastify/formbody';
import fastifyPostgres from '@fastify/postgres';
import dotenv from 'dotenv';
//import path from 'path';
//import { fileURLToPath } from 'url';
dotenv.config()

const app = Fastify({ logger: true })

await app.register(fastifyPostgres, {
  // eslint-disable-next-line no-undef
  connectionString: process.env.CONNECTION_STRING,
});

await app.register(formBody)

const start = async () => {
  await app.listen({ port: 3000 })
  console.log('Сервер запущен')
}

start()