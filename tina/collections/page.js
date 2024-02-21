import featuresBlock from "./blocks/featuresBlock.js";
import servicesAreaBlock from "./blocks/servicesAreaBlock.js";

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
            type: "string",
            name: "mainHeading",
            label: "Main Heading",
            required: true
        },
        {
            type: "string",
            name: "taglineText",
            label: "Tag Line Text",
            required: true
        },
        {
            type: "string",
            name: "ctaText",
            label: "Call To Action Button Text",
            required: true
        },
        {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
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
