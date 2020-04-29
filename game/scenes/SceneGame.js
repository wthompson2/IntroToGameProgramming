export default {
    name: "SceneGame",

    objects: [
        {
            name: "Text Timer",
            type: "TextTimer",
            location: { x: 10, y: 40},
            components: [
                {
                    type:"TimeComponent",
                    values:[
                        {
                            key:"text",
                            value:"5"
                        },
                        {
                            key:"font",
                            value:"35pt Times"
                        },
                        {
                            key:"fill",
                            value:"black"
                        }
                    ]
                }
            ]
        },
        {
            name: "Score",
            type: "Text",
            location: { x: 10, y: 475},
            components: [
                {
                    type:"TextComponent",
                    values:[
                        {
                            key:"text",
                            value:"SCORE: 0"
                            // value:"SCORE: " + score
                        },
                        {
                            key:"font",
                            value:"20pt Times"
                        },
                        {
                            key:"fill",
                            value:"black"
                        }
                    ]
                }
            ]
        },
        {
            // How to add x amount of targets when hit?
            name: "Target",
            type: "Target",
            location: { x: 500, y: 350}, // x: ??, y: ??
            components: [
                {
                    type:"TargetComponent",
                    values:[
                        {
                            key:"radius",
                            value:"25"
                        },
                        {
                            key:"fill",
                            value:"red"
                        },
                        {
                            key:"stroke",
                            value:"black"
                        }
                    ]
                }
            ]
        }
    ]
}
