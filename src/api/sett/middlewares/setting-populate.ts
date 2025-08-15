/**
 * `setting-populate` middleware
 */

import type { Core } from '@strapi/strapi';
import { SETTINGS_QUERY_PARAMS } from '../../../../query-parameters';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  
  return async (ctx, next) => {
    strapi.log.info('In setting-populate middleware.');
    
    // Apply the populate parameters from SETTINGS_QUERY_PARAMS
    ctx.query.populate = SETTINGS_QUERY_PARAMS.populate;

    await next();
  };
};
