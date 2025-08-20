/**
 * sett controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sett.sett', ({ strapi }) => ({
  // Override the default find method to properly populate settings fields
  async find(ctx) {
    const settings = await strapi.entityService.findOne('api::sett.sett', 1, {
      populate: {
        colors: true,
        metaData: {
          populate: {
            openGraph: true,
            favIcon: {
              fields: ['url','name']
            }
          }
        },
      },
    });

    return {
      data: settings,
    };
  },

}));
