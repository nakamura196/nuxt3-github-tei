// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  app: {
    // baseURL: "/nuxt3-github-tei",
  },
  ssr: false,
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      SITE_NAME: "Nuxt 3 x GitHub API x TEI",
    },
  }
});
