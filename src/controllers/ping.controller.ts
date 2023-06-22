import { Controller, Get, Route } from 'tsoa';

interface PingResponse {
    message: string;
}
@Route('api/ping')
export class PingController extends Controller {
    @Get('/')
    public async getMessage(): Promise<PingResponse> {
        return {
            message: 'pong'
        };
    }
}
