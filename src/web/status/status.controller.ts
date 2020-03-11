import express, { Request, Response, Router, NextFunction } from 'express';
import { StatusService } from '../../status';
import logger from '../../logger/logger.model';

export class StatusController {
    public readonly router: Router = express.Router();
    private readonly statusService: StatusService;
    public static PATH: string = '/status';

    public constructor() {
        this.statusService = new StatusService();
        this.router.get(StatusController.PATH, this.get.bind(this));
    }
    private async get(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            logger.debug('Getting application status');
            response.send(this.statusService.get());
        } catch (e) {
            next(e);
        }
    }
}
