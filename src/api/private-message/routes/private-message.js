'use strict';

/**
 * private-message router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::private-message.private-message');
