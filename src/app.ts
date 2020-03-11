import { StatusController } from './web/status';
import { CardController } from './web/card';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'
import logger from './logger/logger.model';
import express, { NextFunction, Request, Response } from 'express';
import { AuthorizationService } from './authorization';

export class App {
    public readonly app: express.Application;
    public readonly port: number;

    constructor(port: number = 3000) {
        this.app = express();
        this.port = port;
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/', (new StatusController()).router);
        this.app.use('/', (new AuthorizationService()).auth, (new CardController()).router);
        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            logger.error(err);
            res.status(500).send({message: err.message})
        })
    }
    public listen() {
        this.app.listen(this.port, () => {
            logger.debug(`App listening on the port ${this.port}`);
        });
    }
}