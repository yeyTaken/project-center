import nextra from "nextra";
// import createNextIntlPlugin from "next-intl/plugin";

// NextIntl config
// const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

//nextra config
const withNextra = nextra({
  // contentDirBasePath: '/docs'
  // ... Add Nextra-specific options here
  mdxOptions: {
    rehypePrettyCodeOptions: {
      // theme: "one-dark-pro",
      // keepBackground: true,
      theme: {
        light: 'min-light',
        dark: 'min-dark'
      }
    }
  }
});

// next.js configs
export default withNextra({
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
