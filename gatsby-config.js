require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site
    siteTitle: `Dodgeblock VR`,
    // Default title of the page
    siteTitleAlt: `Dodgeblock VR - An immersive endless runner for VR`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://dodgeblockvr.com`,
    // Used for SEO
    siteDescription: `An retro-arcade inspired immersive endless runner for VR, currently released for the Oculus Go`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/vr-landscape.png`,
    // Twitter Handle
    author: `@jameskvidler`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dodgeblock VR`,
        short_name: `Dodgeblock`,
        description: `An retro-arcade inspired immersive endless runner for VR, currently released for the Oculus Go`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#7855f6`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-background-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `./src/images/` }
    },
    {
      resolve: `gatsby-source-oculus-leaderboards`,
      options: {
        oculus_appId: process.env.OCULUS_APPID,
        oculus_appSecret: process.env.OCULUS_APPSECRET,
        oculus_leaderboard: `Highest_Score`,
        limit: 10 //optional
      }
    },
  ],
}
