'use strict';

/**
 * fruit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fruit.fruit');
