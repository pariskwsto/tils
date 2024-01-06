# Remove Homepage

[https://stackoverflow.com/questions/61999271/how-to-set-docs-as-the-main-page](https://stackoverflow.com/questions/61999271/how-to-set-docs-as-the-main-page)

Remove Homepage and land on Docs directly

1. Delete or archive your `src/pages/index.js` file.
2. Add the `routeBasePath` attribute in `docusaurus.config.js` file.

```js title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: './sidebars.ts' },
        // ...
      },
    ],
  ],
  // ...
};
```

3. Go to the md file that you want to be the landing page (e.g. docs/intro.md) and add this at the top.

```md title="docs/intro.md"
---
title: Introduction
slug: /
sidebar_position: 1
---
```

_Explore more by clicking [here](https://docusaurus.io/docs/docs-introduction#docs-only-mode)_
