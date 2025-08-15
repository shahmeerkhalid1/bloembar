/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';
import { GLOBAL_QUERY_PARAMS } from '../../../../query-parameters';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In global-populate middleware.');
    
    // Apply the populate parameters from GLOBAL_QUERY_PARAMS
    ctx.query.populate = GLOBAL_QUERY_PARAMS.populate;

    await next();
  };
};
