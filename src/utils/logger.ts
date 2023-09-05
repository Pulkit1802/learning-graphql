import winston from 'winston';
import configs from '../configs/configs';

const enumerateErrorFormat = winston.format((info) => {
    if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
    }
    return info;
});

const logger = winston.createLogger({
    level: configs.NODE_ENV === 'dev' ? 'debug' : 'info',
    format: winston.format.combine(
    enumerateErrorFormat(),
    configs.NODE_ENV === 'dev'
        ? winston.format.colorize()
        : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
    ),
    transports: [
        new winston.transports.Console({
        stderrLevels: ['error'],
        }),
    ],
})

export default logger;