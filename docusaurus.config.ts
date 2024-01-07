import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TILs',
  tagline: 'Unveiling the Tech Learning Odyssey',
  favicon: 'img/favicon.ico',
  url: 'https://tils.pariskwsto.com',
  baseUrl: '/',
  organizationName: 'pariskwsto',
  projectName: 'tils',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: './sidebars.ts' },
        theme: { customCss: './src/css/custom.css' },
        gtag: { trackingID: 'G-Y8KL8G7EXH', anonymizeIP: true },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'TILs',
      logo: {
        alt: 'pariskwsto.com logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/pariskwsto/tils',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Menu',
          items: [
            {
              label: 'Docs',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pariskwsto',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/pariskostopoulos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TILs | <a href="https://pariskwsto.com" target="_blank">pariskwsto.com</a>. Built with love ❤️ 💪.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
