import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://kubecolor.github.io",
  integrations: [
    starlight({
      title: "kubecolor",
      logo: {
        src: "./src/assets/kubecolor_logo.svg",
      },
      social: {
        github: "https://github.com/kubecolor/kubecolor",
      },
      sidebar: [
        {
          label: "Usage",
          items: [
            {
              label: "Getting started",
              link: "/usage/getting-started/",
            },
            {
              label: "How it works",
              link: "/usage/how-it-works/",
            },
          ],
        },
        {
          label: "Setup",
          items: [
            {
              label: "Installation",
              link: "/setup/install/",
            },
            {
              label: "Shells",
              autogenerate: {
                directory: "setup/shells",
              },
            },
          ],
        },
        {
          label: "Customizing",
          autogenerate: {
            directory: "customizing",
          },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Color Themes", link: "/customizing/themes/" },
          //   { label: "Examples", link: "/guides/examples/" },
          // ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
});
