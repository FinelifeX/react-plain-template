import Log from "./log";

const logger = new Log();

logger.log('Hello, world!');
logger.asyncLog(1000, 'Hello, world! Async!');