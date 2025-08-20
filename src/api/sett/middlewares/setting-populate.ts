/**
 * setting-populate middleware
 */

export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // Process for any sett route
    if (ctx.state.route?.handler?.includes('sett') && ctx.request.method === 'GET') {
      
      try {
        // console.log('🔍 Processing cities for sett route');

        // Now try the specific populate
        const globalSpecific: any = await strapi.entityService.findOne('api::global.global', 1, {
          populate: {
            blocks: {
              on: {
                'block.cities': {
                  populate: {
                    cities: {
                      populate: {
                        image: {
                          fields: ['url' ]
                        }
                      },
                    },
                  },
                },
              },
            },
          },
        });

        // console.log('📊 Global data (specific populate):', JSON.stringify(globalSpecific, null, 2));

        // Extract cities from global blocks
        const citiesBlock = globalSpecific?.blocks?.find((block: any) => block.__component === 'block.cities');
        const cities = citiesBlock?.cities || [];

        // console.log('🏙️ Cities found:', JSON.stringify(cities, null, 2));

        // Add cities to the response - force it even if empty for testing
        if (ctx.body?.data) {
          if (Array.isArray(ctx.body.data)) {
            // Handle collection response
            ctx.body.data = ctx.body.data.map((item: any) => ({
              ...item,
              cities,
              //middlewareApplied: true, // Debug flag
            }));
          } else {
            // Handle single item response
            ctx.body.data = {
              ...ctx.body.data,
              cities,
             // middlewareApplied: true, // Debug flag
            };
          }
          
          // console.log('✅ Updated response:', JSON.stringify(ctx.body, null, 2));
        } else {
          console.log('❌ No ctx.body.data found');
        }
      } catch (error) {
        console.error('❌ Error in setting-populate middleware:', error);
        strapi.log.error('Error in setting-populate middleware:', error);
      }
    }

    // console.log('=== END MIDDLEWARE DEBUG ===');
  };
};