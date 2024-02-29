import { defineConfig } from "tinacms";
import navBar from "./collections/navBar.js";
import page from "./collections/page";
import post from "./collections/post";

const contentApiUrlOverride = process.env["NODE_ENV"] === "staging" ? "/api/tina/gql" : null;

export const config = defineConfig({
    contentApiUrlOverride,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
      collections: [
          navBar,
          page,
          post
      ],
  },
});

export default config;
