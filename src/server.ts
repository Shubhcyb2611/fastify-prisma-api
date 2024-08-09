import { fastify, FastifyLoggerOptions } from 'fastify';
import { Logger } from './middleware/logger/logger.js';

const server = fastify({ logger: Logger['development'] });

server.get('/', async (request, reply) => {
  return 'Hello there! 👋';
});

const start = async () => {
  try {
    await server.listen({ port: 8080 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
