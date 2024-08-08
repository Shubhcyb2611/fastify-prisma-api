import Fastify from 'fastify';
import { prismaErrorHandler } from './middleware/error/error.handler.js';

const fastify = Fastify();

fastify.setErrorHandler(prismaErrorHandler);

fastify.listen({ port: 3000 }, (err: any, address: any) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is listening jb,g;lmkglhh`);
});
