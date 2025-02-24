const headTags = [          
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://static.cloud.coveo.com/atomic/v2/themes/coveo.css',
      },
    },
    {
      tagName: 'script',
      attributes: {
        src: 'https://static.cloud.coveo.com/atomic/v2/atomic.esm.js',
        type: 'module',
      },
    },
    {
      tagName: 'script',
      attributes: {
        src: 'https://static.cloud.coveo.com/atomic-hosted-page/v0/atomic-hosted-page/atomic-hosted-page.esm.js',
        type: 'module',
      },
    },
  ];
  
  export default headTags;