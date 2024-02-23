export default {
    type: "object",
    name: "DesignAreaBlocks",
    label: "Design Area Blocks",
    fields: [
        {
            type: "image",
            name: "servicesImage",
            label: "Services Image"
        },
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
    ]
};
