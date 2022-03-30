'use strict';

/**
 *  fruit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fruit.fruit');
