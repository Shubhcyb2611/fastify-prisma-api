import Fastify from 'fastify';
import { prismaErrorHandler } from './middleware/error/error.handler';

const fastify = Fastify();

fastify.setErrorHandler(prismaErrorHandler);

fastify.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is listening`);
});
