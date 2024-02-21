import mainBannerBlock from "./blocks/mainBannerBlock";
import featuresBlock from "./blocks/featuresBlock";
import servicesAreaBlock from "./blocks/servicesAreaBlock";

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
    fields: [
        {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
                mainBannerBlock,
                featuresBlock,
                servicesAreaBlock
            ]
        }
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
