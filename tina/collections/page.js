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
            name: "slug",
            label: "Page Slug",
            required: true
        },
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
    // Change filename to include pageType, then update the router function to split filename based on pageType.
    ui: {
        filename: {
            readonly: true,
            slugify: ({ pageType, slug }) => {
                console.log(pageType, slug)
                return `${pageType}__${slug}`;
            }
        },
        // PageType is not in document, must include this information within filename.
        router: ({ document }) => {
            console.log(document);
            const isHomePage = document._sys.filename === "none__home"
              || document._sys.filename === "home";
            if (isHomePage) {
                return `/`;
            }
            const splitFilename = document._sys.filename.split("__");
            if (splitFilename.length === 1)
                return `/${splitFilename[0]}`;
            if (splitFilename.length === 2 && splitFilename[0] === "none")
                return `/${splitFilename[1]}`;
            if (splitFilename.length === 2)
                return `/${splitFilename[0]}/${splitFilename[1]}`;
            throw new Error("Tina Router: Page url could not be correctly parsed..");
        }
    }
};
