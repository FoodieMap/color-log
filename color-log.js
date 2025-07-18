import clc from 'cli-color';

const formatValue = (key, value) => {

    const whiteEqual = clc.white('=');
    const whiteColon = clc.white(':');
    if (key === 'data') {
        // Format the "data" object in white
        return `${clc.white(key)} ${whiteEqual} ${JSON.stringify(value)}`;
    } else if (typeof value === 'object') {
        // Format other objects normally
        return `${clc.white(key)}${whiteColon} ${JSON.stringify(value)}`;
    }
    return `${clc.white(key)}${whiteColon} ${value}`;
};

const log = {
    log: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.green(`[LOG]: ${formattedMessage}`));
        } else {
            console.log(clc.green(`[LOG]: ${obj}`));
        }
    },

    info: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.cyan(`[INFO]: ${formattedMessage}`));
        } else {
            console.log(clc.cyan(`[INFO]: ${obj}`));
        }
    },

    debug: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.magenta(`[DEBUG]: ${formattedMessage}`));
        } else {
            console.log(clc.magenta(`[DEBUG]: ${obj}`));
        }
    },

    warn: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.yellow(`[WARN]: ${formattedMessage}`));
        } else {
            console.log(clc.yellow(`[WARN]: ${obj}`));
        }
    },

    err: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            const formattedMessage = Object.entries(obj)
                .map(([key, value]) => formatValue(key, value))
                .join(', ');

            console.log(clc.red(`[ERROR]: ${formattedMessage}`));
        } else {
            console.log(clc.red(`[ERROR]: ${obj}`));
        }
    }, 

    http_err: (obj) => {
        if (typeof obj === 'object' && obj !== null) {
        
            const status = obj?.response?.status;
            const message = obj?.response?.data?.message;
            console.log(clc.red(`[HTTP ERROR ${status}]: message: ${message}`));
        } else {
            console.log(clc.red(`[HTTP ERROR]: ${obj}`));
        }
    }, 

    HTTP_STATUS: {
        // 2xx status //
        SUCCESS_200: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.green(`[STATUS: 200, message: OK]: ${formattedMessage}`));
            } else {
                console.log(clc.green(`[STATUS_200]: ${obj}`));
            }
        }, 

        CREATED_201: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.green(`[STATUS: 201, message: CREATED]: ${formattedMessage}`));
            } else {
                console.log(clc.green(`[STATUS: 201, message: CREATED]: ${obj}`));
            }
        }, 

        ACCEPTED_202: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.green(`[STATUS: 202, message: ACCEPTED]: ${formattedMessage}`));
            } else {
                console.log(clc.green(`[STATUS: 202, message: ACCEPTED]: ${obj}`));
            }
        }, 

        NO_CONTENT_204: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.green(`[STATUS: 204, message: NO CONTENT]: ${formattedMessage}`));
            } else {
                console.log(clc.green(`[STATUS: 204, message: NO CONTENT]: ${obj}`));
            }
        }, 

        // 4xx status //
        BAD_REQUEST_400: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.yellowBright(`[STATUS: 400, message: BAD REQUEST]: ${formattedMessage}`));
            } else {
                console.log(clc.yellowBright(`[STATUS: 400, message: BAD REQUEST]: ${obj}`));
            }
        }, 

        UNAUTHRIZED_401: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.yellowBright(`[STATUS: 401, message: UNAUTHRIZED]: ${formattedMessage}`));
            } else {
                console.log(clc.yellowBright(`[STATUS: 401, message: UNAUTHRIZED]: ${obj}`));
            }
        }, 

        REQUEST_TIMEOUT_408: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.yellowBright(`[STATUS: 408, message: REQUEST TIMEOUT]: ${formattedMessage}`));
            } else {
                console.log(clc.yellowBright(`[STATUS: 408, message: REQUEST TIMEOUT]: ${obj}`));
            }
        }, 

        CONFLICT_409: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.yellowBright(`[STATUS: 409, message: CONFLICT]: ${formattedMessage}`));
            } else {
                console.log(clc.yellowBright(`[STATUS: 409, message: CONFLICT]: ${obj}`));
            }
        }, 

        TOO_MANY_REQUESTS_429: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.yellowBright(`[STATUS: 429, message: TOO MANY REQUESTS]: ${formattedMessage}`));
            } else {
                console.log(clc.yellowBright(`[STATUS: 429, message: TOO MANY REQUESTS]: ${obj}`));
            }
        }, 

        // 5xx //

        INTERNAL_SERVER_ERROR_500: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.redBright(`[STATUS: 500, message: INTERNAL SERVER_ERROR]: ${formattedMessage}`));
            } else {
                console.log(clc.redBright(`[STATUS: 500, message: INTERNAL SERVER_ERROR]: ${obj}`));
            }
        }, 

        BAD_GATEWAY_502: (obj) => {
            if (typeof obj === 'object' && obj !== null) {
                const formattedMessage = Object.entries(obj)
                    .map(([key, value]) => formatValue(key, value))
                    .join(', ');

                console.log(clc.redBright(`[STATUS: 502, message: BAD GATEWAY]: ${formattedMessage}`));
            } else {
                console.log(clc.redBright(`[STATUS: 502, message: BAD GATEWAY]: ${obj}`));
            }
        }, 

    }
};

export default log;
