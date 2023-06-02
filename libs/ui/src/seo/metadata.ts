import { metaKeywords } from './keywords';
import type { Metadata } from 'next';

const baseURL = 'https:fkdfsdk';

export const defaultMetadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: 'Family-daily  - share your family moments',
    template: '%s |family-daily ',
  },
  description:
    'Family-daily is a e-commerce area for family to share their family moments and buy some family products.',
  keywords: metaKeywords.join(', '),
  creator: 'SM Tanimur Rahman',
  publisher: 'SM Tanimur Rahman',
  applicationName: 'Family-daily ',
  viewport: 'width=device-width, initial-scale=1.0',
  colorScheme: 'light',
  category: 'e-commerce',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [
    {
      name: 'SM Tanimur Rahman',
      url: 'https://smtanimur.vercel.app/',
    },
  ],
  themeColor: '#ffffff',
  appLinks: {
    web: {
      url: baseURL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseURL,
    siteName: 'family-daily',
    title: 'family-daily - e-shop for family',
    description:
      'family-daily is a e-commerce area for family to share their family moments and buy some family products.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 800,
        height: 600,
        alt: 'family-daily - shop for family',
      },
    ],
    emails: ['mushfiqurtanim@gmail.com'],
    phoneNumbers: ['+880 1648138404'],
    countryName: 'Bangladesh',
  },
  // icons: {
  //   // TODO: Add icons
  //   icon: {},
  // },
  twitter: {
    creator: '@smtanimur',
    site: '@family-daily',
    card: 'summary_large_image',
    title: 'family-daily - e-shop for family',
    description:
      'family-daily is a e-commerce area for family to share their family moments and buy some family products.',
    images: [
      {
        url: `${baseURL}/images/seo_image.png`,
        width: 800,
        height: 600,
        alt: 'family-daily - shop for family',
      },
    ],
  },
} as Metadata;