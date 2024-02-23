import mainBannerBlock from "./blocks/mainBannerBlock";
import featuresBlock from "./blocks/featuresBlock";
import servicesAreaBlock from "./blocks/servicesAreaBlock";
import designAreaBlock from "./blocks/designAreaBlock";
import ourFeatureBlock from "./blocks/ourFeatureBlock";
import ourRecentWorksBlock from "./blocks/ourRecentWorksBlock";
import ourAwesomeTeamBlock from "./blocks/ourAwesomeTeamBlock";
import funFactsBlocks from "./blocks/funFactsBlocks";


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
            required: true,
            ui: { defaultItem: "none" },
            options: [
                {
                    value: "none",
                    label: "None"
                },
                {
                    value: "solutions",
                    label: "Solutions"
                },
                {
                    value: "services",
                    label: "Services"
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
                servicesAreaBlock,
                designAreaBlock,
                ourFeatureBlock,
                ourRecentWorksBlock,
                ourAwesomeTeamBlock,
                funFactsBlocks
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
