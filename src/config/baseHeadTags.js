const allowedUrls = [
    'https://www.teradata.com',
    'https://*.teradata.com',
    'https://avatars.githubusercontent.com',
    'https://github.com',
    'https://kit.fontawesome.com/',
    'https://ka-f.fontawesome.com/',
    'https://fonts.googleapis.com/',
    'https://fonts.gstatic.com/',
    'https://www.google-analytics.com/',
    'https://analytics.google.com/',
    'https://www.googletagmanager.com/',
    'https://td.doubleclick.net/',
    'https://www.youtube.com/',
    'https://*.algolia.net/',
  ];
  
const baseHeadTags = [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: `default-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: ${allowedUrls.join(' ')};`,
      },
    },
    {
      // Load font awesome icons
      tagName: 'script',
      attributes: {
        defer: 'true',
        type: 'text/partytown',
        src: 'https://kit.fontawesome.com/17a35e44e3.js',
        crossorigin: 'anonymous',
      },
    },
  ];

  export { baseHeadTags };