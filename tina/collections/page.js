const featuresBlock = {
    type: "object",
    name: "featuresBlock",
    label: "Features Block",
    fields: [
        {
            type: "object",
            list: true,
            name: "feature",
            label: "Feature Card",
            fields: [
                {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: true,
                    isTitle: true
                },
                {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true
                }
            ]
        }
    ]
};

const servicesAreaBlock = {
    type: "object",
    name: "servicesAreaBlock",
    label: "Services Area Block",
    fields: [
        {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true
        },
        {
            type: "string",
            name: "text",
            label: "Text",
            required: true
        },
        {
            type: "object",
            list: true,
            name: "services",
            label: "Services",
            required: true,
            fields: [
                {
                    type: "string",
                    name: "serviceName",
                    label: "Service Name"
                }
            ]
        },
        {
            type: "image",
            name: "servicesImage",
            label: "Services Image"
        }
    ]
};

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
