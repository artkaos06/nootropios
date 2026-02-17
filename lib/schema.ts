import type { WithContext, Article, FAQPage, BreadcrumbList, Organization, WebSite } from 'schema-dts';

const SITE_URL = 'https://nootropios.com';
const SITE_NAME = 'Nootropios';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Guide expert des nootropiques et boosters de testostérone naturels en France.',
    sameAs: [],
  };
}

export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Guide expert des nootropiques et boosters de testostérone naturels en France. Études cliniques, dosages, stacks et protocoles.',
    inLanguage: 'fr-FR',
  };
}

export function getArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': props.url },
    keywords: props.keywords?.join(', '),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getWebPageSchema(props: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: props.title,
    description: props.description,
    url: props.url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  };
}
