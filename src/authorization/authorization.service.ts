import { NextFunction, Request, Response } from 'express';
import  { safeCompare } from 'express-basic-auth';
import logger from '../logger/logger.model';

export class AuthorizationService {
    private static USERNAME: string = 'admin';
    private static PASSWORD: string = 'root';
    public auth(request: Request, response: Response, next: NextFunction) {
        if (request.path === '/status') {
            return next();
        }
        if (!request.headers.authorization || request.headers.authorization.indexOf('Basic ') === -1) {
            logger.debug('Missing Authorization Header');
            return response.status(401).json({ message: 'Missing Authorization Header' });
        }
        const base64Credentials: string =  request.headers.authorization.split(' ')[1];
        const credentials: string = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password]: string[] = credentials.split(':');
        if ((!safeCompare(username, AuthorizationService.USERNAME)) || (!safeCompare(password, AuthorizationService.PASSWORD))) {
            logger.debug('Invalid Authentication Credentials');
            return response.status(401).json({ message: 'Invalid Authentication Credentials' });
        }
        next();
    }}