export default {
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
