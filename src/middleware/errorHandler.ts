import { BaseError, StatusCodes } from '../utils/apiError';
import { NextFunction, Request, Response } from 'express';

class ErrorHandlerResponse {
    success: boolean;
    status: StatusCodes;
    message: string;
    stack: string;
    constructor(
        success: boolean,
        status: StatusCodes,
        message: string,
        stack: string
    ) {
        this.success = success;
        this.status = status;
        this.message = message;
        this.stack = stack;
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
const ErrorHandler = (
    err: BaseError,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR; // if no status code is provided, default to 500 (internal server error)
    const message = err.message || 'Something went wrong';
    const stack = process.env.NODE_ENV !== 'development' ? '' : err.stack;
    const response = new ErrorHandlerResponse(false, status, message, stack);
    res.status(status).json(response);
};

export default ErrorHandler;
