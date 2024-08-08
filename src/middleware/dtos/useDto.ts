import { FastifyReply, FastifyRequest } from 'fastify';
import { ZodSchema } from 'zod';

export function useDto(schema: ZodSchema) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await schema.parseAsync(req.body);
    } catch (error) {
      reply.status(400).send({
        error: {
          code: 400,
        },
      });
    }
  };
}
