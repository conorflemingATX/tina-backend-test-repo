export default {
    type: "object",
    name: "funfactsBlocks",
    label: "Fun Facts Blocks",
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
            type: "string",
            name: "contactheading",
            label: "Contact Heading",
            required: true
        },
        {
            type: "string",
            name: "contacttext",
            label: "Contact text",
            required: true
        },
        {
            type: "string",
            name: "contactarea",
            label: "Contact area",
            required: true
        },
        {
            type: "object",
            list: true,
            name: "facts",
            label: "Facts",
            fields: [
                {
                    type: "string",
                    name: "numbers",
                    label: "Numbers"
                },
                {
                    type: "string",
                    name: "field",
                    label: "Field"
                }
            ]
        }
 
    ]
};