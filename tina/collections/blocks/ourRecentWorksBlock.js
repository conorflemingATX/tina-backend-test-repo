export default {
    type: "object",
    name: "OurRecentBlock",
    label: "Our Recent Block",
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
            name: "RecentWorks",
            label: "Recent works",
            required: true,
            fields: [
               {
                    type: "string",
                    name: "Heading",
                    label: "Heading"
                },
                {
                    type: "string",
                    name: "text",
                    label: "Text"
                },
                {
                    type: "image",
                    name: "worksimage",
                    label: "Image"
                }
            ]
        }
    ]
};
