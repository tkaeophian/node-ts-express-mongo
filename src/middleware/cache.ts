import { NextFunction, Request, Response } from 'express';
const cache = function (req: Request, res: Response, next: NextFunction) {
    // Keep cahce for 5 minutes (in seconds)
    const period = 60 * 5;

    // you only want to cache for GET requests
    if (req.method == 'GET') {
        res.set('Cache-control', `public, max-age=${period}`);
    } else {
        // for the other requests set strict no caching parameters
        res.set('Cache-control', `no-store`);
    }

    // remember to call next() to pass on the request
    next();
};

export default cache;
