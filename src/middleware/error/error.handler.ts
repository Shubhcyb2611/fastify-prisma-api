import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Logger } from '../logger/logger';

export function prismaErrorHandler(
  err: any,
  req: FastifyRequest,
  reply: FastifyReply
) {
  let statusCode = 500;
  if (err?.code) {
    statusCode = parseInt(err.code.replace(/\D/g, ''), 10) || 500;
  }
  if (err?.meta?.cause === PrismaClientKnownRequestError) {
    if (err?.code === 'P2002') {
      statusCode = 409;
    }
  }
  const errorMessage = err?.message || 'An unexpected error occurred';
  Logger.error(err);

  reply.status(statusCode).send({
    error: {
      code: statusCode,
      message: errorMessage,
    },
  });
}
