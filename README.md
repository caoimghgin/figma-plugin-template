# Figma Plugin Template

The **Figma Plugin Template** contains the example as shown on [Figma Docs](https://www.figma.com/plugin-docs/intro/), with some structural changes and extra tooling provided by [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/ui/).

## Purpose
Developers creating new Figma plugins can benefit by using a standard code template. By leveraging the [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/ui/) framework, code is easier to read and consistent with Figma plugin UI standards. The **Figma Plugin Template** standardizes best practises and demonstrates basic communication between views and controllers.

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin, use [./src/views/App.tsx](./src/views/App.tsx).  
⭐ To interact with the Figma API, use [./src/controllers/figma.ts](./src/controllers/figma.ts).  
⭐ To communicate events between App.tsx and figma.ts, use [./src/events/handlers.ts](./src/events/handlers.ts).  
⭐ How to use Preact UI components with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/ui/).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).  

Below are the steps to get your plugin running. You can also find instructions at:

  1. https://www.figma.com/plugin-docs/plugin-quickstart-guide/
  2. https://yuanqing.github.io/create-figma-plugin/ui/


This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.
