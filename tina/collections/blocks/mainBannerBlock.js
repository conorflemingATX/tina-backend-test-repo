export default {
    type: "object",
    name: "mainBannerBlock",
    label: "Main Banner Block",
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
            label: "Tagline Text",
            required: true
        },
        {
            type: "string",
            name: "ctaButtonText",
            label: "Call To Action Button Text",
            required: true
        },
        {
            type: "string",
            name: "ctaButtonLink",
            label: "Call To Action Button Link URL",
            required: true
        }
    ]
};
