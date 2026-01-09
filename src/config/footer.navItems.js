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
        title: 'Why Teradata',
        items: [
          {
            href: `https://${footerBaseUrl}/why-teradata`,
            label: "Why we're trusted"
          },
          {
            href: `https://${footerBaseUrl}/trust-security-center`,
            label: 'Trust & Security Center'
          },
          {
            href: `https://${footerBaseUrl}/customers`,
            label: 'Success stories'
          },
          {
            href: `https://${footerBaseUrl}/about-us/awards`,
            label: 'Awards & recognition'
          },
          {
            href: `https://${footerBaseUrl}/insights/analyst-content`,
            label: 'Analyst reports'
          },
          {
            href: `https://${footerBaseUrl}/why-teradata/business-value`,
            label: 'Business value & ROI'
          },
          {
            href: `https://${footerBaseUrl}/platform/deployment`,
            label: 'Deployment'
          }
        ]
      },
      {
        title: 'Product',
        items: [
          {
            href: `https://${footerBaseUrl}/platform/vantagecloud`,
            label: 'Teradata VantageCloud'
          },
          {
            href: `https://${footerBaseUrl}/platform/deployment/on-premises`,
            label: 'Teradata on premises'
          },
          {
            href: `https://${footerBaseUrl}/platform/ai-unlimited`,
            label: 'Teradata AI Unlimited'
          },
          {
            href: `https://${footerBaseUrl}/platform/clearscape-analytics`,
            label: 'ClearScape Analytics'
          },
          {
            href: `https://${footerBaseUrl}/platform/workloads`,
            label: 'Workloads'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/pricing`,
            label: 'Consumption pricing'
          }
        ]
      },
      {
        title: 'Solutions',
        items: [
          {
            href: `https://${footerBaseUrl}/industries`,
            label: 'Industries'
          },
          {
            href: `https://${footerBaseUrl}/solutions/customer-experience`,
            label: 'Customer experience (CX)'
          },
          {
            href: `https://${footerBaseUrl}/solutions/finance-transformation`,
            label: 'Finance transformation'
          },
          {
            href: `https://${footerBaseUrl}/solutions/fraud-prevention`,
            label: 'Fraud prevention'
          },
          {
            href: `https://${footerBaseUrl}/solutions/dynamic-supply-chain`,
            label: 'Supply chain logistics'
          },
          {
            href: `https://${footerBaseUrl}/solutions/business-use-cases`,
            label: 'Use cases'
          },
          {
            href: `https://${footerBaseUrl}/partners`,
            label: 'Partners'
          },
          {
            href: 'https://teradata.my.site.com/teradataPRM/s/login/',
            label: 'Partner portal login',
            external: true,
            icon: 'open_in_new'
          },
          {
            href: `https://${footerBaseUrl}/why-teradata/teradata-services`,
            label: 'Services'
          }
        ]
      },
      {
        title: 'Resources',
        items: [
          {
            href: `https://${footerBaseUrl}/insights/ai-and-machine-learning`,
            label: 'AI/ML'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-analytics`,
            label: 'Data Analytics'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-architecture`,
            label: 'Data architecture'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-platform`,
            label: 'Data platform'
          },
          {
            href: `https://${footerBaseUrl}/insights/data-security`,
            label: 'Data security'
          },
          {
            href: `https://${footerBaseUrl}/university/overview`,
            label: 'Teradata University'
          },
          {
            href: `https://${footerBaseUrl}/insights/webinars`,
            label: 'Webinars'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/demos`,
            label: 'Demo hub'
          },
          {
            href: 'https://developers.teradata.com/',
            label: 'Developer portal',
            external: true,
            icon: 'open_in_new'
          },
          {
            href: 'https://support.teradata.com/csm',
            label: 'Support portal',
            external: true,
            icon: 'open_in_new'
          }
        ]
      },
      {
        title: 'About us',
        items: [
          {
            href: `https://${footerBaseUrl}/about-us`,
            label: 'Who we are'
          },
          {
            href: `https://${footerBaseUrl}/about-us/leadership`,
            label: 'Our leadership'
          },
          {
            href: `https://${footerBaseUrl}/about-us/our-story`,
            label: 'Our story'
          },
          {
            href: `https://${footerBaseUrl}/about-us/environmental-social-governance`,
            label: 'Sustainability'
          },
          {
            href: `https://${footerBaseUrl}/about-us/inclusion-and-diversity`,
            label: 'People & culture'
          },
          {
            href: `https://${footerBaseUrl}/about-us/teradata-cares`,
            label: 'Teradata Cares'
          },
          {
            href: `https://${footerBaseUrl}/about-us/careers`,
            label: 'Careers'
          },
          {
            href: `https://${footerBaseUrl}/events`,
            label: 'Events and webinars'
          },
          {
            href: `https://${footerBaseUrl}/getting-started/executive-briefing-center`,
            label: 'Executive Briefing Center'
          },
          {
            href: `https://${footerBaseUrl}/newsroom`,
            label: 'Newsroom'
          },
          {
            href: 'https://investor.teradata.com',
            label: 'Investors',
            external: true,
            icon: 'open_in_new'
          }
        ]
      }
    ],
    socialLinks: {
      title: 'Social media',
      items: [
        {
          external: true,
          href: 'https://www.linkedin.com/company/teradata',
          icon: 'linkedin',
          label: 'LinkedIn'
        },
        {
          external: true,
          href: 'https://github.com/Teradata',
          icon: 'github',
          label: 'GitHub'
        },
        {
          external: true,
          href: 'https://medium.com/teradata',
          icon: 'medium',
          label: 'Medium'
        },
        {
          external: true,
          href: 'https://twitter.com/teradata',
          icon: 'twitter',
          label: 'Twitter'
        },
        {
          external: true,
          href: 'https://www.youtube.com/user/teradata',
          icon: 'youtube',
          label: 'YouTube'
        },
        {
          external: true,
          href: 'https://www.facebook.com/Teradata',
          icon: 'facebook',
          label: 'Facebook'
        },
        {
          external: true,
          href: 'https://www.instagram.com/teradata/',
          icon: 'instagram',
          label: 'Instagram'
        },
        {
          external: true,
          href: 'https://www.teradata.com/rss',
          icon: 'rss',
          label: 'RSS'
        }
      ]
    },
    legalLinks: [
      {
        href: `https://${footerBaseUrl}/sitemap`,
        label: 'Sitemap',
        celebrus: 'Legal - Sitemap'
      },
      {
        href: `https://${footerBaseUrl}/privacy`,
        label: 'Privacy',
        celebrus: 'Legal - Privacy'
      },
      {
        href: `https://${footerBaseUrl}/privacy#do-not-sell-share`,
        label: 'Don’t sell/share my info',
        celebrus: 'Legal - Don’t sell/share my info'
      },
      {
        href: '#tracking-consent',
        label: 'Tracking consent',
        celebrus: 'Legal - Tracking consent'
      },
      {
        href: `https://${footerBaseUrl}/legal/legal-notice`,
        label: 'Legal',
        celebrus: 'Legal - Legal'
      },
      {
        href: `https://${footerBaseUrl}/legal/terms-of-use`,
        label: 'Terms of use',
        celebrus: 'Legal - Terms of use'
      },
      {
        href: `https://${footerBaseUrl}/about-us/environmental-social-governance/teradata-accessibility`,
        label: 'Accessibility',
        celebrus: 'Legal - Accessibility'
      },
      {
        href: `https://${footerBaseUrl}/product-support-policy`,
        label: 'Support policies',
        celebrus: 'Legal - Support policies'
      }
    ],
    linksOfInterest: {
      title: 'Also of Interest',
      items: [
        {
          href: `https://${footerBaseUrl}/platform/ai-ml`,
          label: 'Artificial Intelligence and Machine Learning'
        },
        {
          href: `https://${footerBaseUrl}/solutions/big-data`,
          label: 'Big Data Analytics Solutions'
        },
        {
          href: `https://${footerBaseUrl}/insights/data-security`,
          label: 'Data Security'
        }
      ]
    },
    copyright: '2024 Teradata. All Rights Reserved',
  };
}
