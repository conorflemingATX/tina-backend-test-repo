export default {
    type: "object",
    name: "OurAwesomeTeamBlock",
    label: "Our Awesome Team Area Blocks",
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
            name: "ourawesometeam",
            label: "our Awesome Team",
            fields: [
                {
                    type:"image",
                    name:"teammemberimage",
                    label:"Team Member Image"
                },
                {
                    type: "string",
                    name: "nameofmember",
                    label: "Name of the Member"
                },
                {
                    type: "string",
                    name: "roleofmember",
                    label: "role of the Member"
                },
                {
                    type: "image",
                    name: "icon1",
                    label: "Icon 1"
                },
                {
                    type: "image",
                    name: "icon2",
                    label: "Icon 2"
                },
                {
                    type: "image",
                    name: "icon3",
                    label: "Icon 3"
                },
                {
                    type: "image",
                    name: "icon4",
                    label: "Icon 4"
                },
                {
                    type: "string",
                    name: "textarea",
                    label: "Text Area"
                }
            ]
        },
    ]
};
