const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Dragon API documentation',
        version,
        license: {
          name: 'MIT',
          url: '',
        },
    },
    servers: [
        {
          url: `http://localhost:${config.port}/v1`,
          description: 'Development server',
        },
    ],
}

module.exports = swaggerDefinition;