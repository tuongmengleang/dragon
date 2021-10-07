const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../../docs/swaggerDef');

const router = express.Router();

const specs = swaggerJSDoc({
    swaggerDefinition,
    // apis: ['src/docs/*.yml', 'src/routes/api/v1/*.js'],
    apis: ['src/routes/api/v1/*.js'],
});
router.use('/', swaggerUi.serve, swaggerUi.setup(specs));
  
module.exports = router;