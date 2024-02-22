export default {
    type: "object",
    name: "OurFeatureAreaBlocks",
    label: "Our Feature Area Blocks",
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
            name: "ourfeatures",
            label: "our features",
            required: true,
            fields: [
                {
                    type: "string",
                    name: "featureName",
                    label: "feature Name"
                },
                {
                    type: "string",
                    name: "featureDescription",
                    label: "Feature Description"
                }
            ]
        },
    ]
};
