# 📚 Documentation Library

This directory contains all documentation sources imported from various GitHub repositories. The content is organized by technology categories to make it easier to navigate and reference.

This documentation is automatically generated using the fetch script in the root project and serves as a knowledge base for AI assistance and development references.

## 📁 Structure of the Brain

```
brain/
├── README.md        — This file, includes a table of contents referencing brain/.github/docs
├── .github/
│   ├── docs/        — All downloaded docs, structured by domain (Nuxt, React, etc.)
│   ├── prompts/     — Custom Copilot prompts to use in chat
│   ├── instructions/ — Custom Copilot instruction files
│   └── copilot-instructions.md — Master instruction file for all contexts
└── .copilotignore   — Specifies files to exclude from GitHub Copilot suggestions
```

> **Note:** The documentation previously found in `brain/docs/` has been moved to `brain/.github/docs/` to improve organization and accessibility by AI assistants.

## 🗂️ Organization

The documentation is organized in a hierarchical structure:
- By technology/domain (e.g., Nuxt, React, etc.)
- Then by specific modules or concepts
- Finally by individual documentation pages

## 📑 Table of Contents

<!-- TOC_START -->
<!-- Generated automatically by fetch.ts -->
* **javascript**/
  * **fonctionnal-programming**/
    * [ch01](javascript/fonctionnal-programming/ch01.md)
    * [ch02](javascript/fonctionnal-programming/ch02.md)
    * [ch03](javascript/fonctionnal-programming/ch03.md)
    * [ch04](javascript/fonctionnal-programming/ch04.md)
    * [ch05](javascript/fonctionnal-programming/ch05.md)
    * [ch06](javascript/fonctionnal-programming/ch06.md)
    * [ch07](javascript/fonctionnal-programming/ch07.md)
    * [ch08](javascript/fonctionnal-programming/ch08.md)
    * [ch09](javascript/fonctionnal-programming/ch09.md)
    * [ch10](javascript/fonctionnal-programming/ch10.md)
    * [ch11](javascript/fonctionnal-programming/ch11.md)
    * [ch12](javascript/fonctionnal-programming/ch12.md)
    * [ch13](javascript/fonctionnal-programming/ch13.md)
* **nitro**/
  * **docs**/
    * [0.index](nitro/docs/0.index.md)
    * [00.migration](nitro/docs/00.migration.md)
    * [1.utils](nitro/docs/1.utils.md)
    * [10.tasks](nitro/docs/10.tasks.md)
    * [2.routing](nitro/docs/2.routing.md)
    * [3.websocket](nitro/docs/3.websocket.md)
    * [4.storage](nitro/docs/4.storage.md)
    * [5.database](nitro/docs/5.database.md)
    * [6.cache](nitro/docs/6.cache.md)
    * [7.fetch](nitro/docs/7.fetch.md)
    * [8.assets](nitro/docs/8.assets.md)
    * [9.plugins](nitro/docs/9.plugins.md)
    * [97.configuration](nitro/docs/97.configuration.md)
    * [98.typescript](nitro/docs/98.typescript.md)
    * [99.nightly](nitro/docs/99.nightly.md)
  * **examples**/
    * **api-routes**/
      * **api**/
        * **hello**/
      * **routes**/
    * **cached-handler**/
      * **routes**/
    * **custom-error-handler**/
      * **routes**/
    * **database**/
      * **routes**/
      * **tasks**/
        * **db**/
    * **middleware**/
      * **middleware**/
      * **routes**/
    * **plugins**/
      * **plugins**/
      * **routes**/
    * **websocket**/
      * **routes**/
* **nuxt**/
  * **docs**/
    * **1.getting-started**/
      * [01.introduction](nuxt/docs/1.getting-started/01.introduction.md)
      * [02.installation](nuxt/docs/1.getting-started/02.installation.md)
      * [03.configuration](nuxt/docs/1.getting-started/03.configuration.md)
      * [04.views](nuxt/docs/1.getting-started/04.views.md)
      * [05.assets](nuxt/docs/1.getting-started/05.assets.md)
      * [06.styling](nuxt/docs/1.getting-started/06.styling.md)
      * [07.routing](nuxt/docs/1.getting-started/07.routing.md)
      * [08.seo-meta](nuxt/docs/1.getting-started/08.seo-meta.md)
      * [09.transitions](nuxt/docs/1.getting-started/09.transitions.md)
      * [10.data-fetching](nuxt/docs/1.getting-started/10.data-fetching.md)
      * [11.state-management](nuxt/docs/1.getting-started/11.state-management.md)
      * [12.error-handling](nuxt/docs/1.getting-started/12.error-handling.md)
      * [13.server](nuxt/docs/1.getting-started/13.server.md)
      * [14.layers](nuxt/docs/1.getting-started/14.layers.md)
      * [15.prerendering](nuxt/docs/1.getting-started/15.prerendering.md)
      * [16.deployment](nuxt/docs/1.getting-started/16.deployment.md)
      * [17.testing](nuxt/docs/1.getting-started/17.testing.md)
      * [18.upgrade](nuxt/docs/1.getting-started/18.upgrade.md)
    * **2.guide**/
      * **1.concepts**/
        * [1.auto-imports](nuxt/docs/2.guide/1.concepts/1.auto-imports.md)
        * [10.nuxt-lifecycle](nuxt/docs/2.guide/1.concepts/10.nuxt-lifecycle.md)
        * [2.vuejs-development](nuxt/docs/2.guide/1.concepts/2.vuejs-development.md)
        * [3.rendering](nuxt/docs/2.guide/1.concepts/3.rendering.md)
        * [4.server-engine](nuxt/docs/2.guide/1.concepts/4.server-engine.md)
        * [5.modules](nuxt/docs/2.guide/1.concepts/5.modules.md)
        * [7.esm](nuxt/docs/2.guide/1.concepts/7.esm.md)
        * [8.typescript](nuxt/docs/2.guide/1.concepts/8.typescript.md)
        * [9.code-style](nuxt/docs/2.guide/1.concepts/9.code-style.md)
      * **2.directory-structure**/
        * [0.nuxt](nuxt/docs/2.guide/2.directory-structure/0.nuxt.md)
        * [0.output](nuxt/docs/2.guide/2.directory-structure/0.output.md)
        * [1.assets](nuxt/docs/2.guide/2.directory-structure/1.assets.md)
        * [1.components](nuxt/docs/2.guide/2.directory-structure/1.components.md)
        * [1.composables](nuxt/docs/2.guide/2.directory-structure/1.composables.md)
        * [1.content](nuxt/docs/2.guide/2.directory-structure/1.content.md)
        * [1.layouts](nuxt/docs/2.guide/2.directory-structure/1.layouts.md)
        * [1.middleware](nuxt/docs/2.guide/2.directory-structure/1.middleware.md)
        * [1.modules](nuxt/docs/2.guide/2.directory-structure/1.modules.md)
        * [1.node_modules](nuxt/docs/2.guide/2.directory-structure/1.node_modules.md)
        * [1.pages](nuxt/docs/2.guide/2.directory-structure/1.pages.md)
        * [1.plugins](nuxt/docs/2.guide/2.directory-structure/1.plugins.md)
        * [1.public](nuxt/docs/2.guide/2.directory-structure/1.public.md)
        * [1.server](nuxt/docs/2.guide/2.directory-structure/1.server.md)
        * [1.shared](nuxt/docs/2.guide/2.directory-structure/1.shared.md)
        * [1.utils](nuxt/docs/2.guide/2.directory-structure/1.utils.md)
        * [2.env](nuxt/docs/2.guide/2.directory-structure/2.env.md)
        * [2.gitignore](nuxt/docs/2.guide/2.directory-structure/2.gitignore.md)
        * [2.nuxtignore](nuxt/docs/2.guide/2.directory-structure/2.nuxtignore.md)
        * [2.nuxtrc](nuxt/docs/2.guide/2.directory-structure/2.nuxtrc.md)
        * [3.app-config](nuxt/docs/2.guide/2.directory-structure/3.app-config.md)
        * [3.app](nuxt/docs/2.guide/2.directory-structure/3.app.md)
        * [3.error](nuxt/docs/2.guide/2.directory-structure/3.error.md)
        * [3.nuxt-config](nuxt/docs/2.guide/2.directory-structure/3.nuxt-config.md)
        * [3.package](nuxt/docs/2.guide/2.directory-structure/3.package.md)
        * [3.tsconfig](nuxt/docs/2.guide/2.directory-structure/3.tsconfig.md)
      * **3.going-further**/
        * [1.events](nuxt/docs/2.guide/3.going-further/1.events.md)
        * [1.experimental-features](nuxt/docs/2.guide/3.going-further/1.experimental-features.md)
        * [1.features](nuxt/docs/2.guide/3.going-further/1.features.md)
        * [1.internals](nuxt/docs/2.guide/3.going-further/1.internals.md)
        * [10.runtime-config](nuxt/docs/2.guide/3.going-further/10.runtime-config.md)
        * [11.nightly-release-channel](nuxt/docs/2.guide/3.going-further/11.nightly-release-channel.md)
        * [2.hooks](nuxt/docs/2.guide/3.going-further/2.hooks.md)
        * [3.modules](nuxt/docs/2.guide/3.going-further/3.modules.md)
        * [4.kit](nuxt/docs/2.guide/3.going-further/4.kit.md)
        * [6.nuxt-app](nuxt/docs/2.guide/3.going-further/6.nuxt-app.md)
        * [7.layers](nuxt/docs/2.guide/3.going-further/7.layers.md)
        * [9.debugging](nuxt/docs/2.guide/3.going-further/9.debugging.md)
        * [index](nuxt/docs/2.guide/3.going-further/index.md)
      * **4.recipes**/
        * [1.custom-routing](nuxt/docs/2.guide/4.recipes/1.custom-routing.md)
        * [2.vite-plugin](nuxt/docs/2.guide/4.recipes/2.vite-plugin.md)
        * [3.custom-usefetch](nuxt/docs/2.guide/4.recipes/3.custom-usefetch.md)
        * [4.sessions-and-authentication](nuxt/docs/2.guide/4.recipes/4.sessions-and-authentication.md)
      * [0.index](nuxt/docs/2.guide/0.index.md)
    * **3.api**/
      * **1.components**/
        * [1.client-only](nuxt/docs/3.api/1.components/1.client-only.md)
        * [1.dev-only](nuxt/docs/3.api/1.components/1.dev-only.md)
        * [1.nuxt-client-fallback](nuxt/docs/3.api/1.components/1.nuxt-client-fallback.md)
        * [10.nuxt-picture](nuxt/docs/3.api/1.components/10.nuxt-picture.md)
        * [11.teleports](nuxt/docs/3.api/1.components/11.teleports.md)
        * [12.nuxt-route-announcer](nuxt/docs/3.api/1.components/12.nuxt-route-announcer.md)
        * [13.nuxt-time](nuxt/docs/3.api/1.components/13.nuxt-time.md)
        * [2.nuxt-page](nuxt/docs/3.api/1.components/2.nuxt-page.md)
        * [3.nuxt-layout](nuxt/docs/3.api/1.components/3.nuxt-layout.md)
        * [4.nuxt-link](nuxt/docs/3.api/1.components/4.nuxt-link.md)
        * [5.nuxt-loading-indicator](nuxt/docs/3.api/1.components/5.nuxt-loading-indicator.md)
        * [6.nuxt-error-boundary](nuxt/docs/3.api/1.components/6.nuxt-error-boundary.md)
        * [7.nuxt-welcome](nuxt/docs/3.api/1.components/7.nuxt-welcome.md)
        * [8.nuxt-island](nuxt/docs/3.api/1.components/8.nuxt-island.md)
        * [9.nuxt-img](nuxt/docs/3.api/1.components/9.nuxt-img.md)
      * **2.composables**/
        * [on-prehydrate](nuxt/docs/3.api/2.composables/on-prehydrate.md)
        * [use-app-config](nuxt/docs/3.api/2.composables/use-app-config.md)
        * [use-async-data](nuxt/docs/3.api/2.composables/use-async-data.md)
        * [use-cookie](nuxt/docs/3.api/2.composables/use-cookie.md)
        * [use-error](nuxt/docs/3.api/2.composables/use-error.md)
        * [use-fetch](nuxt/docs/3.api/2.composables/use-fetch.md)
        * [use-head-safe](nuxt/docs/3.api/2.composables/use-head-safe.md)
        * [use-head](nuxt/docs/3.api/2.composables/use-head.md)
        * [use-hydration](nuxt/docs/3.api/2.composables/use-hydration.md)
        * [use-lazy-async-data](nuxt/docs/3.api/2.composables/use-lazy-async-data.md)
        * [use-lazy-fetch](nuxt/docs/3.api/2.composables/use-lazy-fetch.md)
        * [use-loading-indicator](nuxt/docs/3.api/2.composables/use-loading-indicator.md)
        * [use-nuxt-app](nuxt/docs/3.api/2.composables/use-nuxt-app.md)
        * [use-nuxt-data](nuxt/docs/3.api/2.composables/use-nuxt-data.md)
        * [use-preview-mode](nuxt/docs/3.api/2.composables/use-preview-mode.md)
        * [use-request-event](nuxt/docs/3.api/2.composables/use-request-event.md)
        * [use-request-fetch](nuxt/docs/3.api/2.composables/use-request-fetch.md)
        * [use-request-header](nuxt/docs/3.api/2.composables/use-request-header.md)
        * [use-request-headers](nuxt/docs/3.api/2.composables/use-request-headers.md)
        * [use-request-url](nuxt/docs/3.api/2.composables/use-request-url.md)
        * [use-response-header](nuxt/docs/3.api/2.composables/use-response-header.md)
        * [use-route-announcer](nuxt/docs/3.api/2.composables/use-route-announcer.md)
        * [use-route](nuxt/docs/3.api/2.composables/use-route.md)
        * [use-router](nuxt/docs/3.api/2.composables/use-router.md)
        * [use-runtime-config](nuxt/docs/3.api/2.composables/use-runtime-config.md)
        * [use-runtime-hook](nuxt/docs/3.api/2.composables/use-runtime-hook.md)
        * [use-seo-meta](nuxt/docs/3.api/2.composables/use-seo-meta.md)
        * [use-server-seo-meta](nuxt/docs/3.api/2.composables/use-server-seo-meta.md)
        * [use-state](nuxt/docs/3.api/2.composables/use-state.md)
      * **3.utils**/
        * [$fetch](nuxt/docs/3.api/3.utils/$fetch.md)
        * [abort-navigation](nuxt/docs/3.api/3.utils/abort-navigation.md)
        * [add-route-middleware](nuxt/docs/3.api/3.utils/add-route-middleware.md)
        * [call-once](nuxt/docs/3.api/3.utils/call-once.md)
        * [clear-error](nuxt/docs/3.api/3.utils/clear-error.md)
        * [clear-nuxt-data](nuxt/docs/3.api/3.utils/clear-nuxt-data.md)
        * [clear-nuxt-state](nuxt/docs/3.api/3.utils/clear-nuxt-state.md)
        * [create-error](nuxt/docs/3.api/3.utils/create-error.md)
        * [define-nuxt-component](nuxt/docs/3.api/3.utils/define-nuxt-component.md)
        * [define-nuxt-route-middleware](nuxt/docs/3.api/3.utils/define-nuxt-route-middleware.md)
        * [define-page-meta](nuxt/docs/3.api/3.utils/define-page-meta.md)
        * [define-route-rules](nuxt/docs/3.api/3.utils/define-route-rules.md)
        * [navigate-to](nuxt/docs/3.api/3.utils/navigate-to.md)
        * [on-before-route-leave](nuxt/docs/3.api/3.utils/on-before-route-leave.md)
        * [on-before-route-update](nuxt/docs/3.api/3.utils/on-before-route-update.md)
        * [on-nuxt-ready](nuxt/docs/3.api/3.utils/on-nuxt-ready.md)
        * [prefetch-components](nuxt/docs/3.api/3.utils/prefetch-components.md)
        * [preload-components](nuxt/docs/3.api/3.utils/preload-components.md)
        * [preload-route-components](nuxt/docs/3.api/3.utils/preload-route-components.md)
        * [prerender-routes](nuxt/docs/3.api/3.utils/prerender-routes.md)
        * [refresh-cookie](nuxt/docs/3.api/3.utils/refresh-cookie.md)
        * [refresh-nuxt-data](nuxt/docs/3.api/3.utils/refresh-nuxt-data.md)
        * [reload-nuxt-app](nuxt/docs/3.api/3.utils/reload-nuxt-app.md)
        * [set-page-layout](nuxt/docs/3.api/3.utils/set-page-layout.md)
        * [set-response-status](nuxt/docs/3.api/3.utils/set-response-status.md)
        * [show-error](nuxt/docs/3.api/3.utils/show-error.md)
        * [update-app-config](nuxt/docs/3.api/3.utils/update-app-config.md)
      * **4.commands**/
        * [add](nuxt/docs/3.api/4.commands/add.md)
        * [analyze](nuxt/docs/3.api/4.commands/analyze.md)
        * [build-module](nuxt/docs/3.api/4.commands/build-module.md)
        * [build](nuxt/docs/3.api/4.commands/build.md)
        * [cleanup](nuxt/docs/3.api/4.commands/cleanup.md)
        * [dev](nuxt/docs/3.api/4.commands/dev.md)
        * [devtools](nuxt/docs/3.api/4.commands/devtools.md)
        * [generate](nuxt/docs/3.api/4.commands/generate.md)
        * [info](nuxt/docs/3.api/4.commands/info.md)
        * [init](nuxt/docs/3.api/4.commands/init.md)
        * [module](nuxt/docs/3.api/4.commands/module.md)
        * [prepare](nuxt/docs/3.api/4.commands/prepare.md)
        * [preview](nuxt/docs/3.api/4.commands/preview.md)
        * [typecheck](nuxt/docs/3.api/4.commands/typecheck.md)
        * [upgrade](nuxt/docs/3.api/4.commands/upgrade.md)
      * **5.kit**/
        * [1.modules](nuxt/docs/3.api/5.kit/1.modules.md)
        * [10.runtime-config](nuxt/docs/3.api/5.kit/10.runtime-config.md)
        * [10.templates](nuxt/docs/3.api/5.kit/10.templates.md)
        * [11.nitro](nuxt/docs/3.api/5.kit/11.nitro.md)
        * [12.resolving](nuxt/docs/3.api/5.kit/12.resolving.md)
        * [13.logging](nuxt/docs/3.api/5.kit/13.logging.md)
        * [14.builder](nuxt/docs/3.api/5.kit/14.builder.md)
        * [15.examples](nuxt/docs/3.api/5.kit/15.examples.md)
        * [2.programmatic](nuxt/docs/3.api/5.kit/2.programmatic.md)
        * [3.compatibility](nuxt/docs/3.api/5.kit/3.compatibility.md)
        * [4.autoimports](nuxt/docs/3.api/5.kit/4.autoimports.md)
        * [5.components](nuxt/docs/3.api/5.kit/5.components.md)
        * [6.context](nuxt/docs/3.api/5.kit/6.context.md)
        * [7.pages](nuxt/docs/3.api/5.kit/7.pages.md)
        * [8.layout](nuxt/docs/3.api/5.kit/8.layout.md)
        * [9.plugins](nuxt/docs/3.api/5.kit/9.plugins.md)
      * **6.advanced**/
        * [1.hooks](nuxt/docs/3.api/6.advanced/1.hooks.md)
        * [2.import-meta](nuxt/docs/3.api/6.advanced/2.import-meta.md)
      * [6.nuxt-config](nuxt/docs/3.api/6.nuxt-config.md)
      * [index](nuxt/docs/3.api/index.md)
    * **5.community**/
      * [2.getting-help](nuxt/docs/5.community/2.getting-help.md)
      * [3.reporting-bugs](nuxt/docs/5.community/3.reporting-bugs.md)
      * [4.contribution](nuxt/docs/5.community/4.contribution.md)
      * [5.framework-contribution](nuxt/docs/5.community/5.framework-contribution.md)
      * [6.roadmap](nuxt/docs/5.community/6.roadmap.md)
      * [7.changelog](nuxt/docs/5.community/7.changelog.md)
    * **6.bridge**/
      * [1.overview](nuxt/docs/6.bridge/1.overview.md)
      * [10.configuration](nuxt/docs/6.bridge/10.configuration.md)
      * [2.typescript](nuxt/docs/6.bridge/2.typescript.md)
      * [3.bridge-composition-api](nuxt/docs/6.bridge/3.bridge-composition-api.md)
      * [4.plugins-and-middleware](nuxt/docs/6.bridge/4.plugins-and-middleware.md)
      * [5.nuxt3-compatible-api](nuxt/docs/6.bridge/5.nuxt3-compatible-api.md)
      * [6.meta](nuxt/docs/6.bridge/6.meta.md)
      * [7.runtime-config](nuxt/docs/6.bridge/7.runtime-config.md)
      * [8.nitro](nuxt/docs/6.bridge/8.nitro.md)
      * [9.vite](nuxt/docs/6.bridge/9.vite.md)
    * **7.migration**/
      * [1.overview](nuxt/docs/7.migration/1.overview.md)
      * [10.bundling](nuxt/docs/7.migration/10.bundling.md)
      * [11.server](nuxt/docs/7.migration/11.server.md)
      * [2.configuration](nuxt/docs/7.migration/2.configuration.md)
      * [20.module-authors](nuxt/docs/7.migration/20.module-authors.md)
      * [3.auto-imports](nuxt/docs/7.migration/3.auto-imports.md)
      * [4.meta](nuxt/docs/7.migration/4.meta.md)
      * [5.plugins-and-middleware](nuxt/docs/7.migration/5.plugins-and-middleware.md)
      * [6.pages-and-layouts](nuxt/docs/7.migration/6.pages-and-layouts.md)
      * [7.component-options](nuxt/docs/7.migration/7.component-options.md)
      * [8.runtime-config](nuxt/docs/7.migration/8.runtime-config.md)
    * [README](nuxt/docs/README.md)
  * **modules**/
    * **images**/
      * **1.get-started**/
        * [1.installation](nuxt/modules/images/1.get-started/1.installation.md)
        * [2.configuration](nuxt/modules/images/1.get-started/2.configuration.md)
        * [3.providers](nuxt/modules/images/1.get-started/3.providers.md)
        * [4.contributing](nuxt/modules/images/1.get-started/4.contributing.md)
      * **2.usage**/
        * [1.nuxt-img](nuxt/modules/images/2.usage/1.nuxt-img.md)
        * [2.nuxt-picture](nuxt/modules/images/2.usage/2.nuxt-picture.md)
        * [3.use-image](nuxt/modules/images/2.usage/3.use-image.md)
      * **3.providers**/
        * [aliyun](nuxt/modules/images/3.providers/aliyun.md)
        * [aws-amplify](nuxt/modules/images/3.providers/aws-amplify.md)
        * [bunny](nuxt/modules/images/3.providers/bunny.md)
        * [caisy](nuxt/modules/images/3.providers/caisy.md)
        * [cloudflare](nuxt/modules/images/3.providers/cloudflare.md)
        * [cloudimage](nuxt/modules/images/3.providers/cloudimage.md)
        * [cloudinary](nuxt/modules/images/3.providers/cloudinary.md)
        * [contentful](nuxt/modules/images/3.providers/contentful.md)
        * [directus](nuxt/modules/images/3.providers/directus.md)
        * [fastly](nuxt/modules/images/3.providers/fastly.md)
        * [filerobot](nuxt/modules/images/3.providers/filerobot.md)
        * [glide](nuxt/modules/images/3.providers/glide.md)
        * [gumlet](nuxt/modules/images/3.providers/gumlet.md)
        * [hygraph](nuxt/modules/images/3.providers/hygraph.md)
        * [imageengine](nuxt/modules/images/3.providers/imageengine.md)
        * [imagekit](nuxt/modules/images/3.providers/imagekit.md)
        * [imgix](nuxt/modules/images/3.providers/imgix.md)
        * [ipx](nuxt/modules/images/3.providers/ipx.md)
        * [netlify](nuxt/modules/images/3.providers/netlify.md)
        * [prepr](nuxt/modules/images/3.providers/prepr.md)
        * [prismic](nuxt/modules/images/3.providers/prismic.md)
        * [sanity](nuxt/modules/images/3.providers/sanity.md)
        * [sirv](nuxt/modules/images/3.providers/sirv.md)
        * [storyblok](nuxt/modules/images/3.providers/storyblok.md)
        * [strapi](nuxt/modules/images/3.providers/strapi.md)
        * [twicpics](nuxt/modules/images/3.providers/twicpics.md)
        * [unsplash](nuxt/modules/images/3.providers/unsplash.md)
        * [uploadcare](nuxt/modules/images/3.providers/uploadcare.md)
        * [vercel](nuxt/modules/images/3.providers/vercel.md)
        * [weserv](nuxt/modules/images/3.providers/weserv.md)
      * **4.advanced**/
        * [1.custom-provider](nuxt/modules/images/4.advanced/1.custom-provider.md)
        * [2.static-images](nuxt/modules/images/4.advanced/2.static-images.md)
    * **nuxt-content**/
      * **1.getting-started**/
        * [1.index](nuxt/modules/nuxt-content/1.getting-started/1.index.md)
        * [2.installation](nuxt/modules/nuxt-content/1.getting-started/2.installation.md)
        * [3.configuration](nuxt/modules/nuxt-content/1.getting-started/3.configuration.md)
        * [4.migration](nuxt/modules/nuxt-content/1.getting-started/4.migration.md)
      * **2.collections**/
        * [1.define](nuxt/modules/nuxt-content/2.collections/1.define.md)
        * [2.types](nuxt/modules/nuxt-content/2.collections/2.types.md)
        * [3.sources](nuxt/modules/nuxt-content/2.collections/3.sources.md)
      * **3.files**/
        * [1.markdown](nuxt/modules/nuxt-content/3.files/1.markdown.md)
        * [2.yaml](nuxt/modules/nuxt-content/3.files/2.yaml.md)
        * [3.json](nuxt/modules/nuxt-content/3.files/3.json.md)
        * [4.csv](nuxt/modules/nuxt-content/3.files/4.csv.md)
      * **4.utils**/
        * [1.query-collection](nuxt/modules/nuxt-content/4.utils/1.query-collection.md)
        * [2.query-collection-navigation](nuxt/modules/nuxt-content/4.utils/2.query-collection-navigation.md)
        * [3.query-collection-item-surroundings](nuxt/modules/nuxt-content/4.utils/3.query-collection-item-surroundings.md)
        * [4.query-collection-search-sections](nuxt/modules/nuxt-content/4.utils/4.query-collection-search-sections.md)
      * **5.components**/
        * [0.content-renderer](nuxt/modules/nuxt-content/5.components/0.content-renderer.md)
        * [1.slot](nuxt/modules/nuxt-content/5.components/1.slot.md)
        * [2.prose](nuxt/modules/nuxt-content/5.components/2.prose.md)
      * **6.deploy**/
        * [1.server](nuxt/modules/nuxt-content/6.deploy/1.server.md)
        * [2.serverless](nuxt/modules/nuxt-content/6.deploy/2.serverless.md)
        * [3.nuxthub](nuxt/modules/nuxt-content/6.deploy/3.nuxthub.md)
        * [4.cloudflare-pages](nuxt/modules/nuxt-content/6.deploy/4.cloudflare-pages.md)
        * [5.vercel](nuxt/modules/nuxt-content/6.deploy/5.vercel.md)
        * [6.netlify](nuxt/modules/nuxt-content/6.deploy/6.netlify.md)
        * [7.aws-amplify](nuxt/modules/nuxt-content/6.deploy/7.aws-amplify.md)
        * [8.docker](nuxt/modules/nuxt-content/6.deploy/8.docker.md)
        * [9.static](nuxt/modules/nuxt-content/6.deploy/9.static.md)
      * **7.advanced**/
        * [1.fulltext-search](nuxt/modules/nuxt-content/7.advanced/1.fulltext-search.md)
        * [2.raw-content](nuxt/modules/nuxt-content/7.advanced/2.raw-content.md)
        * [3.database](nuxt/modules/nuxt-content/7.advanced/3.database.md)
        * [4.tools](nuxt/modules/nuxt-content/7.advanced/4.tools.md)
        * [5.hooks](nuxt/modules/nuxt-content/7.advanced/5.hooks.md)
        * [6.custom-source](nuxt/modules/nuxt-content/7.advanced/6.custom-source.md)
        * [7.llms](nuxt/modules/nuxt-content/7.advanced/7.llms.md)
      * **8.studio**/
        * [1.setup](nuxt/modules/nuxt-content/8.studio/1.setup.md)
        * [2.github](nuxt/modules/nuxt-content/8.studio/2.github.md)
        * [3.content](nuxt/modules/nuxt-content/8.studio/3.content.md)
        * [4.medias](nuxt/modules/nuxt-content/8.studio/4.medias.md)
        * [5.config](nuxt/modules/nuxt-content/8.studio/5.config.md)
        * [6.debug](nuxt/modules/nuxt-content/8.studio/6.debug.md)
    * **nuxt-fonts**/
      * [1.installation](nuxt/modules/nuxt-fonts/1.installation.md)
      * [2.configuration](nuxt/modules/nuxt-fonts/2.configuration.md)
      * [3.usage](nuxt/modules/nuxt-fonts/3.usage.md)
      * [4.providers](nuxt/modules/nuxt-fonts/4.providers.md)
    * **nuxt-robots**/
      * **1.getting-started**/
        * [0.introduction](nuxt/modules/nuxt-robots/1.getting-started/0.introduction.md)
        * [1.installation](nuxt/modules/nuxt-robots/1.getting-started/1.installation.md)
        * [3.troubleshooting](nuxt/modules/nuxt-robots/1.getting-started/3.troubleshooting.md)
      * **2.guides**/
        * [1.disable-indexing](nuxt/modules/nuxt-robots/2.guides/1.disable-indexing.md)
        * [1.disable-page-indexing](nuxt/modules/nuxt-robots/2.guides/1.disable-page-indexing.md)
        * [1.how-it-works](nuxt/modules/nuxt-robots/2.guides/1.how-it-works.md)
        * [1.robot-recipes](nuxt/modules/nuxt-robots/2.guides/1.robot-recipes.md)
        * [1.robots-txt](nuxt/modules/nuxt-robots/2.guides/1.robots-txt.md)
        * [1.yandex](nuxt/modules/nuxt-robots/2.guides/1.yandex.md)
        * [2.route-rules](nuxt/modules/nuxt-robots/2.guides/2.route-rules.md)
        * [3.content](nuxt/modules/nuxt-robots/2.guides/3.content.md)
        * [3.i18n](nuxt/modules/nuxt-robots/2.guides/3.i18n.md)
        * [3.nuxt-config](nuxt/modules/nuxt-robots/2.guides/3.nuxt-config.md)
      * **3.api**/
        * [0.use-robots-rule](nuxt/modules/nuxt-robots/3.api/0.use-robots-rule.md)
        * [1.config](nuxt/modules/nuxt-robots/3.api/1.config.md)
        * [1.nuxt-hooks](nuxt/modules/nuxt-robots/3.api/1.nuxt-hooks.md)
      * **3.nitro-api**/
        * [0.get-path-robot-config](nuxt/modules/nuxt-robots/3.nitro-api/0.get-path-robot-config.md)
        * [0.get-site-robot-config](nuxt/modules/nuxt-robots/3.nitro-api/0.get-site-robot-config.md)
        * [2.nitro-hooks](nuxt/modules/nuxt-robots/3.nitro-api/2.nitro-hooks.md)
      * **4.releases**/
        * [4.v5](nuxt/modules/nuxt-robots/4.releases/4.v5.md)
        * [5.v4](nuxt/modules/nuxt-robots/4.releases/5.v4.md)
        * [6.v3](nuxt/modules/nuxt-robots/4.releases/6.v3.md)
    * **nuxt-stripe**/
      * **playground**/
        * **components**/
        * **server**/
          * **api**/
      * [doc](nuxt/modules/nuxt-stripe/doc.md)
    * **nuxt-tailwindcss**/
      * **1.getting-started**/
        * [1.installation](nuxt/modules/nuxt-tailwindcss/1.getting-started/1.installation.md)
        * [2.module-options](nuxt/modules/nuxt-tailwindcss/1.getting-started/2.module-options.md)
      * **2.tailwindcss**/
        * [1.configuration](nuxt/modules/nuxt-tailwindcss/2.tailwindcss/1.configuration.md)
        * [2.editor-support](nuxt/modules/nuxt-tailwindcss/2.tailwindcss/2.editor-support.md)
      * **3.examples**/
        * [1.basic](nuxt/modules/nuxt-tailwindcss/3.examples/1.basic.md)
        * [10.module-authoring](nuxt/modules/nuxt-tailwindcss/3.examples/10.module-authoring.md)
        * [2.dark-mode](nuxt/modules/nuxt-tailwindcss/3.examples/2.dark-mode.md)
        * [3.content](nuxt/modules/nuxt-tailwindcss/3.examples/3.content.md)
        * [4.nuxt-layers](nuxt/modules/nuxt-tailwindcss/3.examples/4.nuxt-layers.md)
        * [5.tailwind-plugins](nuxt/modules/nuxt-tailwindcss/3.examples/5.tailwind-plugins.md)
        * [6.postcss-config](nuxt/modules/nuxt-tailwindcss/3.examples/6.postcss-config.md)
        * [7.daisyui](nuxt/modules/nuxt-tailwindcss/3.examples/7.daisyui.md)
        * [8.flowbite](nuxt/modules/nuxt-tailwindcss/3.examples/8.flowbite.md)
        * [9.nuxt-ui](nuxt/modules/nuxt-tailwindcss/3.examples/9.nuxt-ui.md)
    * **supabase**/
      * **1.getting-started**/
        * [1.introduction](nuxt/modules/supabase/1.getting-started/1.introduction.md)
        * [2.authentication](nuxt/modules/supabase/1.getting-started/2.authentication.md)
        * [3.demo](nuxt/modules/supabase/1.getting-started/3.demo.md)
      * **2.composables**/
        * [useSupabaseClient](nuxt/modules/supabase/2.composables/useSupabaseClient.md)
        * [useSupabaseCookieRedirect](nuxt/modules/supabase/2.composables/useSupabaseCookieRedirect.md)
        * [useSupabaseSession](nuxt/modules/supabase/2.composables/useSupabaseSession.md)
        * [useSupabaseUser](nuxt/modules/supabase/2.composables/useSupabaseUser.md)
      * **3.services**/
        * [1.serverSupabaseClient](nuxt/modules/supabase/3.services/1.serverSupabaseClient.md)
        * [2.serverSupabaseServiceRole](nuxt/modules/supabase/3.services/2.serverSupabaseServiceRole.md)
        * [3.serverSupabaseSession](nuxt/modules/supabase/3.services/3.serverSupabaseSession.md)
        * [4.serverSupabaseUser](nuxt/modules/supabase/3.services/4.serverSupabaseUser.md)
      * [index](nuxt/modules/supabase/index.md)
    * **vee-validate**/
    * [nuxt-dayjs](nuxt/modules/nuxt-dayjs.md)
    * [nuxt-gtag](nuxt/modules/nuxt-gtag.md)
  * **nitro**/
    * **guide**/
      * [0.index](nuxt/nitro/guide/0.index.md)
      * [00.migration](nuxt/nitro/guide/00.migration.md)
      * [1.utils](nuxt/nitro/guide/1.utils.md)
      * [10.tasks](nuxt/nitro/guide/10.tasks.md)
      * [2.routing](nuxt/nitro/guide/2.routing.md)
      * [3.websocket](nuxt/nitro/guide/3.websocket.md)
      * [4.storage](nuxt/nitro/guide/4.storage.md)
      * [5.database](nuxt/nitro/guide/5.database.md)
      * [6.cache](nuxt/nitro/guide/6.cache.md)
      * [7.fetch](nuxt/nitro/guide/7.fetch.md)
      * [8.assets](nuxt/nitro/guide/8.assets.md)
      * [9.plugins](nuxt/nitro/guide/9.plugins.md)
      * [97.configuration](nuxt/nitro/guide/97.configuration.md)
      * [98.typescript](nuxt/nitro/guide/98.typescript.md)
      * [99.nightly](nuxt/nitro/guide/99.nightly.md)
  * **shadcn**/
    * [accordion](nuxt/shadcn/accordion.md)
    * [alert-dialog](nuxt/shadcn/alert-dialog.md)
    * [alert](nuxt/shadcn/alert.md)
    * [aspect-ratio](nuxt/shadcn/aspect-ratio.md)
    * [auto-form](nuxt/shadcn/auto-form.md)
    * [avatar](nuxt/shadcn/avatar.md)
    * [badge](nuxt/shadcn/badge.md)
    * [breadcrumb](nuxt/shadcn/breadcrumb.md)
    * [button](nuxt/shadcn/button.md)
    * [calendar](nuxt/shadcn/calendar.md)
    * [card](nuxt/shadcn/card.md)
    * [carousel](nuxt/shadcn/carousel.md)
    * [checkbox](nuxt/shadcn/checkbox.md)
    * [collapsible](nuxt/shadcn/collapsible.md)
    * [combobox](nuxt/shadcn/combobox.md)
    * [command](nuxt/shadcn/command.md)
    * [context-menu](nuxt/shadcn/context-menu.md)
    * [data-table](nuxt/shadcn/data-table.md)
    * [date-picker](nuxt/shadcn/date-picker.md)
    * [dialog](nuxt/shadcn/dialog.md)
    * [drawer](nuxt/shadcn/drawer.md)
    * [dropdown-menu](nuxt/shadcn/dropdown-menu.md)
    * [form](nuxt/shadcn/form.md)
    * [hover-card](nuxt/shadcn/hover-card.md)
    * [input](nuxt/shadcn/input.md)
    * [label](nuxt/shadcn/label.md)
    * [menubar](nuxt/shadcn/menubar.md)
    * [navigation-menu](nuxt/shadcn/navigation-menu.md)
    * [number-field](nuxt/shadcn/number-field.md)
    * [pagination](nuxt/shadcn/pagination.md)
    * [pin-input](nuxt/shadcn/pin-input.md)
    * [popover](nuxt/shadcn/popover.md)
    * [progress](nuxt/shadcn/progress.md)
    * [radio-group](nuxt/shadcn/radio-group.md)
    * [range-calendar](nuxt/shadcn/range-calendar.md)
    * [resizable](nuxt/shadcn/resizable.md)
    * [scroll-area](nuxt/shadcn/scroll-area.md)
    * [select](nuxt/shadcn/select.md)
    * [separator](nuxt/shadcn/separator.md)
    * [sheet](nuxt/shadcn/sheet.md)
    * [sidebar](nuxt/shadcn/sidebar.md)
    * [skeleton](nuxt/shadcn/skeleton.md)
    * [slider](nuxt/shadcn/slider.md)
    * [sonner](nuxt/shadcn/sonner.md)
    * [stepper](nuxt/shadcn/stepper.md)
    * [switch](nuxt/shadcn/switch.md)
    * [table](nuxt/shadcn/table.md)
    * [tabs](nuxt/shadcn/tabs.md)
    * [tags-input](nuxt/shadcn/tags-input.md)
    * [textarea](nuxt/shadcn/textarea.md)
    * [toast](nuxt/shadcn/toast.md)
    * [toggle-group](nuxt/shadcn/toggle-group.md)
    * [toggle](nuxt/shadcn/toggle.md)
    * [tooltip](nuxt/shadcn/tooltip.md)
  * [vueuse](nuxt/vueuse.md)
* **openai**/
  * **node**/
    * **examples**/
      * **azure**/
        * **realtime**/
      * **realtime**/
      * **responses**/
* **postgres**/
* **supabase**/
  * **guides**/
    * **ai**/
      * **examples**/
      * **integrations**/
      * **quickstarts**/
      * **vector-indexes**/
    * **api**/
      * **rest**/
    * **auth**/
      * **auth-helpers**/
      * **auth-hooks**/
      * **auth-mfa**/
      * **debugging**/
      * **enterprise-sso**/
      * **quickstarts**/
      * **server-side**/
      * **sessions**/
      * **social-login**/
      * **third-party**/
    * **cron**/
    * **database**/
      * **connecting-to-postgres**/
      * **extensions**/
        * **wrappers**/
      * **postgres**/
      * **prisma**/
    * **deployment**/
    * **functions**/
      * **examples**/
    * **getting-started**/
      * **quickstarts**/
      * **tutorials**/
    * **integrations**/
      * **build-a-supabase-integration**/
    * **local-development**/
      * **cli**/
      * **testing**/
    * **nuxt-integration**/
    * **platform**/
      * **manage-your-usage**/
      * **migrating-to-supabase**/
      * **migrating-within-supabase**/
      * **sso**/
    * **queues**/
    * **realtime**/
    * **resources**/
    * **security**/
    * **self-hosting**/
    * **storage**/
      * **buckets**/
      * **cdn**/
      * **debugging**/
      * **management**/
      * **production**/
      * **s3**/
      * **schema**/
      * **security**/
      * **serving**/
      * **uploads**/
    * **telemetry**/
* **tailwindcss**/
  * **docs**/
    * **img**/
      * **guides**/
    * **utils**/
* **typescript**/
  * **docs**/
    * **Type Manipulation**/
      * [_Creating Types from Types](typescript/docs/Type Manipulation/_Creating Types from Types.md)
      * [Conditional Types](typescript/docs/Type Manipulation/Conditional Types.md)
      * [Generics](typescript/docs/Type Manipulation/Generics.md)
      * [Indexed Access Types](typescript/docs/Type Manipulation/Indexed Access Types.md)
      * [Keyof Type Operator](typescript/docs/Type Manipulation/Keyof Type Operator.md)
      * [Mapped Types](typescript/docs/Type Manipulation/Mapped Types.md)
      * [Template Literal Types](typescript/docs/Type Manipulation/Template Literal Types.md)
      * [Typeof Type Operator](typescript/docs/Type Manipulation/Typeof Type Operator.md)
    * [Basics](typescript/docs/Basics.md)
    * [Classes](typescript/docs/Classes.md)
    * [Everyday Types](typescript/docs/Everyday Types.md)
    * [Modules](typescript/docs/Modules.md)
    * [More on Functions](typescript/docs/More on Functions.md)
    * [Narrowing](typescript/docs/Narrowing.md)
    * [Object Types](typescript/docs/Object Types.md)
    * [The Handbook](typescript/docs/The Handbook.md)
    * [Type Declarations](typescript/docs/Type Declarations.md)
    * [Understanding Errors](typescript/docs/Understanding Errors.md)
* **vuejs**/
  * **pinia**/
    * **cookbook**/
      * [composables](vuejs/pinia/cookbook/composables.md)
      * [composing-stores](vuejs/pinia/cookbook/composing-stores.md)
      * [hot-module-replacement](vuejs/pinia/cookbook/hot-module-replacement.md)
      * [index](vuejs/pinia/cookbook/index.md)
      * [migration-0-0-7](vuejs/pinia/cookbook/migration-0-0-7.md)
      * [migration-v1-v2](vuejs/pinia/cookbook/migration-v1-v2.md)
      * [migration-v2-v3](vuejs/pinia/cookbook/migration-v2-v3.md)
      * [migration-vuex](vuejs/pinia/cookbook/migration-vuex.md)
      * [options-api](vuejs/pinia/cookbook/options-api.md)
      * [testing](vuejs/pinia/cookbook/testing.md)
      * [vscode-snippets](vuejs/pinia/cookbook/vscode-snippets.md)
    * **pinia-plugin-persistedstate**/
      * [advanced](vuejs/pinia/pinia-plugin-persistedstate/advanced.md)
      * [config](vuejs/pinia/pinia-plugin-persistedstate/config.md)
      * [index](vuejs/pinia/pinia-plugin-persistedstate/index.md)
      * [limitations](vuejs/pinia/pinia-plugin-persistedstate/limitations.md)
      * [why](vuejs/pinia/pinia-plugin-persistedstate/why.md)
  * **tanstack-table**/
    * **guide**/
      * [table-state](vuejs/tanstack-table/guide/table-state.md)
    * [README](vuejs/tanstack-table/README.md)
    * [vue-table](vuejs/tanstack-table/vue-table.md)
* **vueuse**/
  * **guide**/
    * [best-practice](vueuse/guide/best-practice.md)
    * [components](vueuse/guide/components.md)
    * [config](vueuse/guide/config.md)
    * [index](vueuse/guide/index.md)
  * [functions](vueuse/functions.md)
* **zod**/
  * [doc](zod/doc.md)
<!-- TOC_END -->

## 🔄 Last Updated

This documentation was last updated on May 19, 2025.

## 📖 Usage

When working with GitHub Copilot or other AI tools, you can reference these docs to give the AI context about your preferred libraries, frameworks, and coding patterns. The more organized and comprehensive your documentation base is, the more effectively AI tools can assist you.

## 🔌 MCP Integration

This project includes [Model Context Protocol (MCP)](https://github.com/microsoft/model-context-protocol) integration, which provides a standardized way for tools to interact with language models. The MCP setup in this repository:

- Allows connecting to Supabase through the MCP server
- Provides a secure way to manage tokens and credentials
- Enables enhanced contextual search and retrieval of documentation
- Supports integration with VS Code's AI features

You can configure the MCP connection in the `.vscode/mcp.json` file.

## ⚙️ GitHub Copilot Customization

This setup leverages Copilot's advanced customization features in VS Code:

### 📌 Instruction Files

Instruction files define how Copilot should behave for specific file types or contexts.

- Located in `.github/instructions/`
- Use `.instructions.md` extension
- Add front matter with `applyTo` field to target specific paths
- Create them with VS Code command palette: `⇧⌘P` → `Chat: New Instruction File`

### 🧩 Prompt Files

Reusable prompts for Copilot Chat:

- Located in `.github/prompts/`
- Use `.prompt.md` extension
- Add metadata in front matter
- Use in Copilot Chat by typing `/prompt-name`
- Create them with VS Code command palette: `⇧⌘P` → `Chat: New Prompt File`

### 🔧 Settings to Enable

To enable these features, add to VS Code settings:

```json
"github.copilot.chat.codeGeneration.useInstructionFiles": true
```

And optionally configure:
- `chat.instructionsFilesLocations`
- `chat.promptFilesLocations`

## 🛡️ Privacy and Exclusions

The `.copilotignore` file is configured to exclude sensitive files from being processed by GitHub Copilot. You can customize this file to add or remove exclusion patterns.

## 📦 Portability

This `brain/` folder is designed to be modular and portable:

1. **Copy to other projects**: You can copy the entire folder to any of your project repositories
2. **Customize per project**: Each project can have its own documentation and Copilot configurations
3. **Commit with your codebase**: The brain becomes part of your project's knowledge base

This approach creates project-specific AI assistants with specialized knowledge while maintaining consistency in how Copilot assists across your projects.

## 💡 Tips for Effective Use

1. **Organize by domain**: Structure your `docs` directory by technology (React, Node.js, etc.)
2. **Create focused prompt files**: Make task-specific prompt files for recurring workflows
3. **Add context**: Use the `.github/copilot-instructions.md` file to explain your coding preferences
4. **Reference documentation**: In your prompts, reference specific documents in your knowledge base

By organizing documentation this way, you're teaching AI tools to speak your language and understand your tech stack, creating a persistent knowledge base that grows with your expertise.