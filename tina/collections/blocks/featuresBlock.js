export default {
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
