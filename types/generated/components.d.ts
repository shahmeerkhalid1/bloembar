import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBookingSection extends Struct.ComponentSchema {
  collectionName: 'components_block_booking_sections';
  info: {
    displayName: 'Booking Section';
  };
  attributes: {
    book: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlockCities extends Struct.ComponentSchema {
  collectionName: 'components_block_cities';
  info: {
    displayName: 'Cities';
  };
  attributes: {
    cities: Schema.Attribute.Component<'shared.city', true>;
  };
}

export interface BlockEventList extends Struct.ComponentSchema {
  collectionName: 'components_block_event_lists';
  info: {
    displayName: 'Event List';
  };
  attributes: {
    bingoEvents: Schema.Attribute.Component<'shared.feature', true>;
  };
}

export interface BlockFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_block_feature_lists';
  info: {
    displayName: 'Feature List';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature', true>;
  };
}

export interface BlockGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_block_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    Gallery: Schema.Attribute.Component<'shared.gallery', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlockInformationSection extends Struct.ComponentSchema {
  collectionName: 'components_block_information_sections';
  info: {
    displayName: 'Information Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface BlockLogoSection extends Struct.ComponentSchema {
  collectionName: 'components_block_logo_sections';
  info: {
    displayName: 'Logo Section';
  };
  attributes: {
    backgroundText: Schema.Attribute.String;
  };
}

export interface BlockNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_block_nav_links';
  info: {
    displayName: 'Nav Links';
  };
  attributes: {
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface BlockServiceList extends Struct.ComponentSchema {
  collectionName: 'components_block_service_lists';
  info: {
    displayName: 'Service List';
  };
  attributes: {
    Services: Schema.Attribute.Component<'shared.feature', true>;
  };
}

export interface BlockSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_block_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    Social: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface BlockThemeColors extends Struct.ComponentSchema {
  collectionName: 'components_block_theme_colors';
  info: {
    displayName: 'Theme Colors';
  };
  attributes: {
    Colors: Schema.Attribute.Component<'shared.theme', true>;
  };
}

export interface BlockWebsiteInformation extends Struct.ComponentSchema {
  collectionName: 'components_block_website_informations';
  info: {
    displayName: 'Website Information';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    close: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    open: Schema.Attribute.String;
  };
}

export interface MetaMetaInformation extends Struct.ComponentSchema {
  collectionName: 'components_meta_meta_informations';
  info: {
    displayName: 'Meta Information';
  };
  attributes: {
    favIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    language: Schema.Attribute.Enumeration<
      ['nl-NL', 'en-US', 'de', 'de-At', 'de-Li', 'de-Lu', 'de-Ch']
    > &
      Schema.Attribute.DefaultTo<'nl-NL'>;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      ['index', 'follow', 'noindex', 'nofollow']
    >;
    metaTitle: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'meta.open-graph', false>;
  };
}

export interface MetaMetaKeywords extends Struct.ComponentSchema {
  collectionName: 'components_meta_meta_keywords';
  info: {
    displayName: 'Meta Keywords';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface MetaOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_meta_open_graphs';
  info: {
    displayName: 'Open Graph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedCity extends Struct.ComponentSchema {
  collectionName: 'components_shared_cities';
  info: {
    displayName: 'City Name';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    color: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedTextArea extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_areas';
  info: {
    displayName: 'textArea';
  };
  attributes: {
    label: Schema.Attribute.Text;
    placeholder: Schema.Attribute.String;
  };
}

export interface SharedTextInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_inputs';
  info: {
    displayName: 'textInput';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface SharedTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_themes';
  info: {
    displayName: 'Color';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    blackColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#000000'>;
    complementary: Schema.Attribute.String;
    primaryColor: Schema.Attribute.String;
    secondaryColor: Schema.Attribute.String;
    whiteColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#ffffff'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.booking-section': BlockBookingSection;
      'block.cities': BlockCities;
      'block.event-list': BlockEventList;
      'block.feature-list': BlockFeatureList;
      'block.gallery-section': BlockGallerySection;
      'block.information-section': BlockInformationSection;
      'block.logo-section': BlockLogoSection;
      'block.nav-links': BlockNavLinks;
      'block.service-list': BlockServiceList;
      'block.social-links': BlockSocialLinks;
      'block.theme-colors': BlockThemeColors;
      'block.website-information': BlockWebsiteInformation;
      'meta.meta-information': MetaMetaInformation;
      'meta.meta-keywords': MetaMetaKeywords;
      'meta.open-graph': MetaOpenGraph;
      'shared.city': SharedCity;
      'shared.feature': SharedFeature;
      'shared.gallery': SharedGallery;
      'shared.link': SharedLink;
      'shared.text-area': SharedTextArea;
      'shared.text-input': SharedTextInput;
      'shared.theme': SharedTheme;
    }
  }
}
