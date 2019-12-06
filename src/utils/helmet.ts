const title = 'Create Ueno App';
const description = 'The easiest and fastest way to create new projects.';

const favicon = require('assets/images/favicon.png');
const share = require('assets/images/share.png');

export const helmet = {
  title,
  titleTemplate: '%s - Ueno',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: '@uenodotco' },
    { name: 'twitter:creator', content: '@uenodotco' },
    { name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
  ],
};
