'use strict';

/**
 * private-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-message.private-message');
