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
            type: "string",
            name: "pageType",
            label: "Page Type",
            options: [
                {
                    value: "none",
                    label: "None"
                },
                {
                    value: "solution",
                    label: "Solution"
                },
                {
                    value: "service",
                    label: "Service"
                },
                {
                    value: "company",
                    label: "Company"
                }
            ]
        },
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
            if (document.pageType == null || document.pageType === "none") {
                return `/${document._sys.filename}`;
            }
            return `/${document.pageType}/${document._sys.filename}`;
        }
    }
};
