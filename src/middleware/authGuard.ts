import { NextFunction, Request, Response } from 'express';

const authGuard = (req: Request, res: Response, next: NextFunction) => {
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    // Bearer xxxxxx
    // const token = authorization.split(' ')[1];

    try {
        // validate your token here
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: 'Request is not authorized' });
    }
};

export default authGuard;
