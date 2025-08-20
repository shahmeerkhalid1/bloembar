/**
 * Complete Query Parameter Objects for Strapi Content Types
 * Generated from schema definitions for programmatic use
 * 
 * IMPORTANT NOTES:
 * - Fields with type "blocks" (rich text) are automatically included and cannot be populated
 * - Fields with type "string", "text", "number", etc. are automatically included
 * - Only relations, components, and media fields need to be explicitly populated
 * - Dynamic zones require "on" syntax to specify component-specific populations
 */

// ===== GLOBAL CONTENT TYPE QUERIES =====

/**
 * Complete query parameters for Global content type
 * Includes all possible populate options for nested components and relations
 */
export const GLOBAL_QUERY_PARAMS = {
  populate: {
    // Dynamic zone blocks - populate all possible block types
    blocks: {
      on: {
        // Feature List Block
        'block.feature-list': {
          populate: {
            features: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'caption', 'url' ]
                }
              }
            }
          }
        },
        
        // Service List Block
        'block.service-list': {
          populate: {
            Services: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'caption', 'url']
                }
              }
            }
          }
        },
        
        // Event List Block
        'block.event-list': {
          populate: {
            bingoEvents: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'caption', 'url']
                }
              }
            }
          }
        },
        
        // Social Links Block
        'block.social-links': {
          populate: {
            Social: true
          }
        },
        
        // Booking Section Block
        'block.booking-section': {
          populate: {
            image: {
              fields: ['name', 'alternativeText', 'caption', 'url' ]
            },
            book: true
            // description is type "blocks" and is automatically included
          }
        },
        
        // Information Section Block
        'block.information-section': {
          populate: '*'
        },
        
        // Cities Block
        'block.cities': {
          populate: {
            cities: {
              populate: {
                image: {
                  fields: ['name', 'alternativeText', 'caption',  'url' ]
                }
              }
            }
          }
        },
        
        // Gallery Section Block
        'block.gallery-section': {
          populate: {
            Gallery: {
              populate: {
                images: {
                  fields: ['name', 'alternativeText', 'caption', 'url' ],

                }
              }
            }
          }
        },

        'block.nav-links': {
          populate: {
            navItems: true
          }
        },

        'block.website-information': {
          populate: '*'
        },
        'block.logo-section': {
          populate: '*'
        },
      }
    }
  },
  
  // Additional query options
 // publicationState: 'live', // or 'preview' for draft content
  //locale: 'all' // or specific locale like 'en', 'nl-NL'
} as const;

// ===== SETTINGS CONTENT TYPE QUERIES =====

/**
 * Complete query parameters for Settings (Sett) content type
 * Includes all nested components and relations
 */
export const SETTINGS_QUERY_PARAMS = {
  populate: {
    // Colors component (repeatable theme components)
    colors: true,
    
    // Cities component (repeatable city components)
    cities: {
      populate: {
        image: {
          fields: ['name', 'alternativeText', 'caption', 'url' ]
        }
      }
    },
    
    // Meta Data component (single meta information component)
    metaData: {
      populate: {
        openGraph: {
          populate: {
            ogImage: {
              fields: ['name', 'alternativeText', 'caption',  'url' ]
            }
          }
        },
        favIcon: {
          fields: ['name', 'alternativeText', 'caption',  'url']
        }
      }
    }
  },
  
  // Additional query options
  publicationState: 'live', // or 'preview' for draft content
  locale: 'all' // or specific locale
} as const;

// ===== UTILITY QUERY BUILDERS =====

/**
 * Deep populate query - populates everything recursively
 * Use with caution as it can be performance intensive
 */
export const DEEP_POPULATE_QUERY = {
  populate: 'deep'
} as const;

/**
 * Minimal query for basic content only (no relations/media)
 */
export const MINIMAL_GLOBAL_QUERY = {
  fields: ['title', 'description']
} as const;

export const MINIMAL_SETTINGS_QUERY = {
  fields: ['id', 'createdAt', 'updatedAt']
} as const;

// ===== COMPONENT-SPECIFIC QUERIES =====

/**
 * Query parameters for individual components when accessed directly
 */
export const COMPONENT_QUERIES = {
  // Feature/Card component
  feature: {
    populate: {
      image: {
        fields: ['name', 'alternativeText', 'caption','url' ]
      }
    }
  },
  
  // City component
  city: {
    populate: {
      image: {
        fields: ['name', 'alternativeText', 'caption', 'url']
      }
    }
  },
  
  // Theme/Color component
  theme: {
    fields: ['primaryColor', 'secondaryColor', 'whiteColor', 'blackColor', 'backgroundColor']
  },
  
  // Link component
  link: {
    fields: ['label', 'href', 'isExternal']
  },
  
  // Gallery component
  gallery: {
    populate: {
      images: {
        fields: ['name', 'alternativeText', 'caption', 'url']
      }
    }
  },
  
  // Meta Information component
  metaInformation: {
    populate: {
      openGraph: {
        populate: {
          ogImage: {
            fields: ['name', 'alternativeText', 'caption','url' ]
          }
        }
      },
      favIcon: {
        fields: ['name', 'alternativeText', 'caption', 'url' ]
      }
    }
  },
  
  // Open Graph component
  openGraph: {
    populate: {
      ogImage: {
        fields: ['name', 'alternativeText', 'caption', 'url' ]
      }
    }
  }
} as const;

// ===== FIELD-SPECIFIC QUERIES =====

/**
 * Query parameters for specific fields only
 */
export const FIELD_QUERIES = {
  // Get only titles and descriptions
  basicContent: {
    fields: ['title', 'description']
  },
  
  // Get only media/images
  mediaOnly: {
    populate: {
      blocks: {
        on: {
          'block.gallery-section': {
            populate: {
              Gallery: {
                populate: {
                  images: {
                    fields: ['name', 'url', 'alternativeText', 'caption' ]
                  }
                }
              }
            }
          },
          'block.booking-section': {
            populate: {
              image: {
                fields: ['name', 'url', 'alternativeText','caption']
              }
            }
          }
        }
      }
    }
  },
  
  // Get only metadata
  metaOnly: {
    populate: {
      metaData: {
        populate: {
          openGraph: {
            populate: {
              ogImage: {
                fields: ['name', 'url', 'alternativeText', 'caption']
              }
            }
          },
          favIcon: {
            fields: ['name', 'url', 'formats']
          }
        }
      }
    }
  }
} as const;

// ===== FILTER QUERIES =====

/**
 * Common filter examples for querying content
 */
export const FILTER_QUERIES = {
  // Published content only
  publishedOnly: {
    filters: {
      publishedAt: {
        $notNull: true
      }
    }
  },
  
  // Content by locale
  byLocale: (locale: string) => ({
    locale: locale
  }),
  
  // Content with specific publication state
  byPublicationState: (state: 'live' | 'preview') => ({
    publicationState: state
  })
} as const;

// ===== SORTING QUERIES =====

/**
 * Common sorting options
 */
export const SORT_QUERIES = {
  // Sort by creation date (newest first)
  newestFirst: {
    sort: ['createdAt:desc']
  },
  
  // Sort by creation date (oldest first)
  oldestFirst: {
    sort: ['createdAt:asc']
  },
  
  // Sort by update date (most recently updated first)
  recentlyUpdated: {
    sort: ['updatedAt:desc']
  },
  
  // Sort by title alphabetically
  alphabetical: {
    sort: ['title:asc']
  }
} as const;

// ===== COMBINED QUERY EXAMPLES =====

/**
 * Real-world query combinations for common use cases
 */
export const COMBINED_QUERIES = {
  // Complete global content for frontend display
  completeGlobalContent: {
    ...GLOBAL_QUERY_PARAMS,
    ...FILTER_QUERIES.publishedOnly,
    ...SORT_QUERIES.recentlyUpdated
  },
  
  // Complete settings for frontend display
  completeSettingsContent: {
    ...SETTINGS_QUERY_PARAMS,
    ...FILTER_QUERIES.publishedOnly
  },
  
  // Global content for specific locale
  globalContentByLocale: (locale: string) => ({
    ...GLOBAL_QUERY_PARAMS,
    ...FILTER_QUERIES.publishedOnly,
    ...FILTER_QUERIES.byLocale(locale)
  }),
  
  // Minimal content for SEO/meta tags only
  seoContent: {
    fields: ['title', 'description'],
    populate: {
      metaData: {
        populate: {
          openGraph: {
            populate: {
              ogImage: {
                fields: ['url', 'alternativeText', 'formats', 'caption']
              }
            }
          },
          favIcon: {
            fields: ['url', 'formats']
          }
        }
      }
    }
  }
} as const;

// ===== TYPE DEFINITIONS =====

/**
 * TypeScript interfaces for the query parameters
 */
export interface StrapiQueryParams {
  populate?: any;
  fields?: string[];
  filters?: Record<string, any>;
  sort?: string[];
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  publicationState?: 'live' | 'preview';
  locale?: string | 'all';
}

export interface GlobalContentType {
  id: number;
  title: string;
  description: string;
  blocks: Array<{
    __component: string;
    id: number;
    [key: string]: any;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface SettingsContentType {
  id: number;
  colors: Array<{
    id: number;
    primaryColor: string;
    secondaryColor: string;
    whiteColor: string;
    blackColor: string;
    backgroundColor: string;
  }>;
  cities: Array<{
    id: number;
    label: string;
    image: any;
    color: string;
    backgroundColor: string;
  }>;
  metaData: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    metaRobots: 'index' | 'follow' | 'noindex' | 'nofollow';
    language: string;
    openGraph: {
      id: number;
      ogTitle: string;
      ogDescription: string;
      ogImage: any;
      ogType: string;
      ogUrl: string;
    };
    favIcon: any;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// ===== USAGE EXAMPLES =====

/**
 * Example usage in your API calls:
 * 
 * // Fetch complete global content
 * const globalContent = await strapi.entityService.findOne('api::global.global', 1, GLOBAL_QUERY_PARAMS);
 * 
 * // Fetch complete settings
 * const settings = await strapi.entityService.findOne('api::sett.sett', 1, SETTINGS_QUERY_PARAMS);
 * 
 * // Fetch with custom locale
 * const localizedContent = await strapi.entityService.findOne('api::global.global', 1, 
 *   COMBINED_QUERIES.globalContentByLocale('nl-NL')
 * );
 * 
 * // Fetch only SEO data
 * const seoData = await strapi.entityService.findOne('api::global.global', 1, COMBINED_QUERIES.seoContent);
 */
