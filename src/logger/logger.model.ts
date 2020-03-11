import { createLogger, format, Logger, transports } from 'winston';

const logger: Logger = createLogger({
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.align(),
                format.simple()
            ),
            level: 'debug'
        }),
        new (transports.File)({filename: 'error.log', level: 'error'})
    ]
});
export default logger;

