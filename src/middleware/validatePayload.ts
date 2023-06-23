import { AnyZodObject, ZodError } from 'zod';
import { NextFunction, Request, Response } from 'express';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const validatePayload =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params
            });
            next();
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).send(e.errors);
            }
            return res.status(400).send(e);
        }
    };

export default validatePayload;
