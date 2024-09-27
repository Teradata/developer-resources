export default function headerItems(baseUrl = '/', currentLocale = 'en') {
  const locale = currentLocale === 'en' ? '' : `/${currentLocale}`;

  return {
    title: 'header.title',
    navItems: [
      {
        href: `${baseUrl ?? ''}${locale ?? ''}/quickstarts`,
        label: 'header.getting_started',
      },
      {
        label: 'header.docs',
        navItems: [
          {
            label: 'header.docs.vantagecloud_lake',
            href: 'https://docs.teradata.com/p/VantageCloud/Lake',
          },
          {
            label: 'header.docs.ai_unlimited',
            href: `${baseUrl ?? ''}${locale ?? ''}/ai-unlimited/`,
          },
          {
            label: 'header.docs.all_documentation',
            href: 'https://docs.teradata.com/',
          },
        ],
      },
      {
        href: 'https://downloads.teradata.com/',
        label: 'header.downloads',
      },
      {
        label: 'header.community',
        navItems: [
          {
            label: 'header.community.teradata_community',
            href: 'https://support.teradata.com/community',
          },
          {
            label: 'header.community.technical_medium_blogs',
            href: 'https://medium.com/teradata',
            external: true,
          },
          {
            label: 'header.community.github',
            href: 'https://github.com/Teradata',
            external: true,
          },
          {
            label: 'header.community.stack_overflow',
            href: 'https://stackoverflow.com/questions/tagged/teradata',
            external: true,
          },
        ],
      },
    ],
    languages: [
      {
        label: 'Global',
        value: '',
      },
      {
        label: 'Deutschland',
        value: 'de',
      },
      {
        label: 'France',
        value: 'fr',
      },
      {
        label: '日本',
        value: 'ja',
      },
      {
        label: '대한민국',
        value: 'ko',
      },
    ],
  };
}
