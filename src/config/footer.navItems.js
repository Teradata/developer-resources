export default function footerItems(currentLocale = 'en') {
  // Map current locale to teradata.com locale
  const footerLocaleMap = {
    ko: 'kr',
    ja: 'jp',
  };

  const footerLocale = footerLocaleMap[currentLocale] || currentLocale;
  // Korean locale is a special case where the local is prepended to the url
  const isSpecialLocale = currentLocale === 'ko';

  const footerBaseUrl = ['en', 'es'].includes(currentLocale)
    ? 'www.teradata.com'
    : isSpecialLocale
    ? `${footerLocale}.teradata.com`
    : `www.teradata.${footerLocale}`;

  return {
    links: [
      {
        title: 'footer.why_teradata_title',
        items: [
          {
            label: 'footer.why_teradata',
            href: `https://${footerBaseUrl}/why-teradata`,
          },
          {
            label: 'footer.trusted_ai',
            href: `https://${footerBaseUrl}/trusted-ai`,
          },
          {
            label: 'footer.industries',
            href: `https://${footerBaseUrl}/industries`,
          },
          {
            label: 'footer.partners',
            href: `https://${footerBaseUrl}/partners`,
          },
          {
            label: 'footer.partner_registration',
            external: true,
            href: `https://${footerBaseUrl}/getattachment/49d347ac-d544-4a6c-9db3-27c9cd2d5afd/new-user-registration-instructions-for-td-partner-community.pdf?lang=en-us`,
          },
          {
            label: 'footer.partner_portal_login',
            external: true,
            href: 'https://teradata.my.site.com/teradataPRM/s/login/',
          },
          {
            label: 'footer.solutions',
            href: `https://${footerBaseUrl}/solutions/business-use-cases`,
          },
          {
            label: 'footer.success_stories',
            href: `https://${footerBaseUrl}/customers`,
          },
          {
            label: 'footer.services',
            href: `https://${footerBaseUrl}/how-we-help/teradata-services`,
          },
        ],
      },
      {
        title: 'footer.our_platform',
        items: [
          {
            label: 'footer.platform',
            href: `https://${footerBaseUrl}/platform`,
          },
          {
            label: 'footer.vantagecloud',
            href: `https://${footerBaseUrl}/platform/vantagecloud`,
          },
          {
            label: 'footer.clearscape_analytics',
            href: `https://${footerBaseUrl}/platform/clearscape-analytics`,
          },
          {
            label: 'footer.unleash_ai_innovation',
            href: `https://${footerBaseUrl}/platform/ai-ml`,
          },
          {
            label: 'footer.workloads',
            href: `https://${footerBaseUrl}/platform/workloads`,
          },
          {
            label: 'footer.deployment',
            href: `https://${footerBaseUrl}/platform/deployment`,
          },
        ],
      },
      {
        title: 'footer.getting_started',
        items: [
          {
            label: 'footer.pricing',
            href: `https://${footerBaseUrl}/getting-started/pricing`,
          },
          {
            label: 'footer.demos',
            href: `https://${footerBaseUrl}/getting-started/demos`,
          },
          {
            label: 'footer.modernization_workshop',
            href: `https://${footerBaseUrl}/getting-started/modernization-workshop`,
          },
          {
            label: 'footer.executive_briefing_center',
            href: `https://${footerBaseUrl}/getting-started/executive-briefing-center`,
          },
          {
            label: 'footer.events',
            href: `https://${footerBaseUrl}/events`,
          },
          {
            label: 'footer.learning',
            href: `https://${footerBaseUrl}/university`,
          },
        ],
      },
      {
        title: 'footer.insights',
        items: [
          {
            label: 'footer.ai_ml',
            href: `https://${footerBaseUrl}/insights/ai-and-machine-learning`,
          },
          {
            label: 'footer.cloud_data_analytics',
            href: `https://${footerBaseUrl}/insights/cloud-data-analytics`,
          },
          {
            label: 'footer.data_architecture',
            href: `https://${footerBaseUrl}/insights/data-architecture`,
          },
          {
            label: 'footer.data_platform',
            href: `https://${footerBaseUrl}/insights/data-platform`,
          },
          {
            label: 'footer.data_security',
            href: `https://${footerBaseUrl}/insights/data-security`,
          },
          {
            label: 'footer.glossary',
            href: `https://${footerBaseUrl}/glossary`,
          },
        ],
      },
      {
        title: 'footer.about_us',
        items: [
          {
            label: 'footer.who_we_are',
            href: `https://${footerBaseUrl}/about-us`,
          },
          {
            label: 'footer.our_leadership',
            href: `https://${footerBaseUrl}/about-us/leadership`,
          },
          {
            label: 'footer.newsroom',
            href: `https://${footerBaseUrl}/newsroom`,
          },
          {
            label: 'footer.careers',
            external: true,
            href: 'https://careers.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
          },
          {
            label: 'footer.investors',
            external: true,
            href: 'https://investor.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w',
          },
        ],
      },
    ],
    socialLinks: {
      title: 'footer.social_media',
      items: [
        {
          icon: 'fa-brands fa-linkedin-in',
          href: 'https://www.linkedin.com/company/teradata',
          label: 'footer.social_media.linkedin',
        },
        {
          icon: 'fa-brands fa-x-twitter',
          href: 'https://twitter.com/teradata',
          label: 'footer.social_media.twitter',
        },
        {
          icon: 'fa-brands fa-facebook-f',
          href: 'https://www.facebook.com/Teradata',
          label: 'footer.social_media.facebook',
        },
        {
          icon: 'fa-brands fa-instagram',
          href: 'https://www.instagram.com/teradata/',
          label: 'footer.social_media.instagram',
        },
        {
          icon: 'fa-brands fa-youtube',
          href: 'https://www.youtube.com/user/teradata',
          label: 'footer.social_media.youtube',
        },
        {
          icon: 'fa fa-rss',
          href: 'https://www.teradata.com/rss',
          label: 'footer.social_media.rss',
        },
      ],
    },
    legalLinks: [
      {
        label: 'footer.privacy',
        href: `https://${footerBaseUrl}/privacy`,
      },
      {
        label: 'footer.do_not_sell_share',
        href: `https://${footerBaseUrl}/privacy#do-not-sell-share`,
      },
      {
        label: 'footer.terms_of_use',
        href: `https://${footerBaseUrl}/legal/terms-of-use`,
      },
      {
        label: 'footer.legal',
        href: `https://${footerBaseUrl}/legal/legal-notice`,
      },
      {
        label: 'footer.support_policy',
        href: `https://${footerBaseUrl}/product-support-policy`,
      },
      {
        label: 'footer.tracking_consent',
        href: `#tracking-consent`,
      },
    ],
    linksOfInterest: {
      title: 'footer.also_of_interest',
      items: [
        {
          label: 'footer.platform_ai_ml',
          href: `https://${footerBaseUrl}/platform/ai-ml`,
        },
        {
          label: 'footer.big_data',
          href: `https://${footerBaseUrl}/solutions/big-data`,
        },
        {
          label: 'footer.data_security_insights',
          href: `https://${footerBaseUrl}/insights/data-security`,
        },
      ],
    },
    copyright: 'footer.copyright',
  };
}
