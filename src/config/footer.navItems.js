export default function footerItems(currentLocale = 'en') {
  // Map current locale to teradata.com locale
  const footerLocaleMap = {
    ko: 'kr',
    ja: 'jp',
  };

  const footerLocale = footerLocaleMap[currentLocale] || currentLocale;
  // Korean locale is a special case where the local is prepended to the url
  const isSpecialLocale = currentLocale === 'ko';

  const footerBaseUrl =
    currentLocale === 'en' || currentLocale === 'es'
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
            href: `https://${footerBaseUrl}/why-teradata`,
            label: "footer.why_trusted"
          },
          {
            href: `https://${footerBaseUrl}/trust-security-center`,
            label: 'footer.trust_security_center'
          },
          {
            href: `https://${footerBaseUrl}/customers`,
            label: 'footer.success_stories'
          },
          {
            href: `https://${footerBaseUrl}/about-us/awards`,
            label: 'footer.awards'
          },
          {
            href: `https://${footerBaseUrl}/insights/analyst-content`,
            label: 'footer.analyst_reports'
          },
          {
            href: `https://${footerBaseUrl}/why-teradata/business-value`,
            label: 'footer.business_value'
          },
          {
            href: `https://${footerBaseUrl}/platform/deployment`,
            label: 'footer.deployment'
          }
        ]
      },
      {
        title: 'footer.our_platform',
        items: [
          {
            href: `https://${footerBaseUrl}/platform/vantagecloud`,
            label: 'footer.vantagecloud'
          },
          {
            href: `https://${footerBaseUrl}/platform/deployment/on-premises`,
            label: 'footer.on_premises'
          },
          {
            href: `https://${footerBaseUrl}/platform/ai-unlimited`,
            label: 'footer.ai_unlimited'
          },
          {
            href: `https://${footerBaseUrl}/platform/clearscape-analytics`,
            label: 'footer.clearscape_analytics'
          },
          {
            href: `https://${footerBaseUrl}/platform/workloads`,
            label: 'footer.workloads'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/pricing`,
            label: 'footer.pricing'
          }
        ]
      },
      {
        title: 'footer.solutions',
        items: [
          {
            href: `https://${footerBaseUrl}/industries`,
            label: 'footer.industries'
          },
          {
            href: `https://${footerBaseUrl}/solutions/customer-experience`,
            label: 'footer.cx'
          },
          {
            href: `https://${footerBaseUrl}/solutions/finance-transformation`,
            label: 'footer.finance'
          },
          {
            href: `https://${footerBaseUrl}/solutions/fraud-prevention`,
            label: 'footer.fraud'
          },
          {
            href: `https://${footerBaseUrl}/solutions/dynamic-supply-chain`,
            label: 'footer.supply_chain'
          },
          {
            href: `https://${footerBaseUrl}/solutions/business-use-cases`,
            label: 'footer.use_cases'
          },
          {
            href: `https://${footerBaseUrl}/partners`,
            label: 'footer.partners'
          },
          {
            href: 'https://teradata.my.site.com/teradataPRM/s/login/',
            label: 'footer.partner_portal_login',
            external: true,
            icon: 'open_in_new'
          },
          {
            href: `https://${footerBaseUrl}/why-teradata/teradata-services`,
            label: 'footer.services'
          }
        ]
      },
      {
        title: 'footer.insights',
        items: [
          {
            href: `https://${footerBaseUrl}/insights/ai-and-machine-learning`,
            label: 'footer.ai_ml'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-analytics`,
            label: 'footer.cloud_data_analytics'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-architecture`,
            label: 'footer.data_architecture'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-platform`,
            label: 'footer.data_platform'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-security`,
            label: 'footer.data_security'
          },
          {
            href: `https://${footerBaseUrl}/university/overview`,
            label: 'footer.university'
          },
          {
            href: `https://${footerBaseUrl}/insights/webinars`,
            label: 'footer.webinars'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/demos`,
            label: 'footer.demos'
          },
          {
            href: 'https://developers.teradata.com/',
            label: 'footer.developer_portal',
            external: true,
            icon: 'open_in_new'
          },
          {
            href: 'https://support.teradata.com/csm',
            label: 'footer.support_portal',
            external: true,
            icon: 'open_in_new'
          }
        ]
      },
      {
        title: 'footer.about_us',
        items: [
          {
            href: `https://${footerBaseUrl}/about-us`,
            label: 'footer.who_we_are'
          },
          {
            href: `https://${footerBaseUrl}/about-us/leadership`,
            label: 'footer.our_leadership'
          },
          {
            href: `https://${footerBaseUrl}/about-us/our-story`,
            label: 'footer.our_story'
          },
          {
            href: `https://${footerBaseUrl}/about-us/environmental-social-governance`,
            label: 'footer.sustainability'
          },
          {
            href: `https://${footerBaseUrl}/about-us/inclusion-and-diversity`,
            label: 'footer.people_culture'
          },
          {
            href: `https://${footerBaseUrl}/about-us/teradata-cares`,
            label: 'footer.teradata_cares'
          },
          {
            href: `https://${footerBaseUrl}/about-us/careers`,
            label: 'footer.careers'
          },
          {
            href: `https://${footerBaseUrl}/events`,
            label: 'footer.events'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/executive-briefing-center`,
            label: 'footer.executive_briefing_center'
          },
          {
            href: `https://${footerBaseUrl}/newsroom`,
            label: 'footer.newsroom'
          },
          {
            href: 'https://investor.teradata.com',
            label: 'footer.investors',
            external: true,
            icon: 'open_in_new'
          }
        ]
      }
    ],
    socialLinks: {
      title: 'footer.social_media',
      items: [
        {
          external: true,
          href: 'https://www.linkedin.com/company/teradata',
          icon: 'linkedin',
          label: 'footer.social_media.linkedin'
        },
        {
          external: true,
          href: 'https://github.com/Teradata',
          icon: 'github',
          label: 'header.community.github'
        },
        {
          external: true,
          href: 'https://medium.com/teradata',
          icon: 'medium',
          label: 'footer.social_media.medium'
        },
        {
          external: true,
          href: 'https://twitter.com/teradata',
          icon: 'twitter',
          label: 'footer.social_media.twitter'
        },
        {
          external: true,
          href: 'https://www.youtube.com/user/teradata',
          icon: 'youtube',
          label: 'footer.social_media.youtube'
        },
        {
          external: true,
          href: 'https://www.facebook.com/Teradata',
          icon: 'facebook',
          label: 'footer.social_media.facebook'
        },
        {
          external: true,
          href: 'https://www.instagram.com/teradata/',
          icon: 'instagram',
          label: 'footer.social_media.instagram'
        },
        {
          external: true,
          href: 'https://www.teradata.com/rss',
          icon: 'rss',
          label: 'footer.social_media.rss'
        }
      ]
    },
    legalLinks: [
      {
        href: `https://${footerBaseUrl}/sitemap`,
        label: 'footer.sitemap',
        celebrus: 'Legal - Sitemap'
      },
      {
        href: `https://${footerBaseUrl}/privacy`,
        label: 'footer.privacy',
        celebrus: 'Legal - Privacy'
      },
      {
        href: `https://${footerBaseUrl}/privacy#do-not-sell-share`,
        label: 'footer.do_not_sell_share',
        celebrus: 'Legal - Don’t sell/share my info'
      },
      {
        href: '#tracking-consent',
        label: 'footer.tracking_consent',
        celebrus: 'Legal - Tracking consent'
      },
      {
        href: `https://${footerBaseUrl}/legal/legal-notice`,
        label: 'footer.legal',
        celebrus: 'Legal - Legal'
      },
      {
        href: `https://${footerBaseUrl}/legal/terms-of-use`,
        label: 'footer.terms_of_use',
        celebrus: 'Legal - Terms of use'
      },
      {
        href: `https://${footerBaseUrl}/about-us/environmental-social-governance/teradata-accessibility`,
        label: 'footer.accessibility',
        celebrus: 'Legal - Accessibility'
      },
      {
        href: `https://${footerBaseUrl}/product-support-policy`,
        label: 'footer.support_policy',
        celebrus: 'Legal - Support policies'
      }
    ],
    linksOfInterest: {
      title: 'footer.also_of_interest',
      items: [
        {
          href: `https://${footerBaseUrl}/platform/ai-ml`,
          label: 'footer.links_interest.ai_ml'
        },
        {
          href: `https://${footerBaseUrl}/solutions/big-data`,
          label: 'footer.links_interest.big_data'
        },
        {
          href: `https://${footerBaseUrl}/insights/data-security`,
          label: 'footer.links_interest.data_security'
        }
      ]
    },
    copyright: 'footer.copyright',
  };
}
