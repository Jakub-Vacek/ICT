import express, { Request, Response, Router, NextFunction } from 'express';
import logger from '../../logger/logger.model';
import { CardStatusService } from '../../card-status';
import { CardValidityService } from '../../card-validity';
import { CardSerializerService } from './card-serializer.service';
import { CardResponse } from './card-response.model';

export class CardController {
    public readonly router: Router = express.Router();
    private readonly statusService: CardStatusService;
    private readonly validityService: CardValidityService;
    private readonly serializerService: CardSerializerService;
    private readonly path: string = '/cards';

    public constructor() {
        this.serializerService = new CardSerializerService();
        this.statusService = new CardStatusService();
        this.validityService = new CardValidityService();
        this.router.get(`${this.path}/:id`, this.get.bind(this));
    }
    private async get(request: Request, response: Response, next: NextFunction){
        try {
            const id: number = Number.parseInt(request.params.id, 10);
            logger.debug(`Getting information about card with id ${id}`);
            const cardResponse: CardResponse = this.serializerService.create(await this.statusService.getStatus(id), await this.validityService.getValidity(id));
            response.json(cardResponse);
        } catch (e) {
            next(e);
        }
    }
}
