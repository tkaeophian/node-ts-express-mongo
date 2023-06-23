import { Controller, Get, Route } from 'tsoa';

export class PingResponse {
    message: string;
}
@Route('api/ping')
export class PingController extends Controller {
    @Get('/')
    public async getMessage(): Promise<PingResponse> {
        const response = new PingResponse();
        response.message = 'pong';
        return new Promise((resolve) => {
            resolve(response);
        });
    }
}
