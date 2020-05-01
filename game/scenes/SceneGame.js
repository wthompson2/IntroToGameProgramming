export default {
    name: "SceneGame",

    objects: [
        {
            name: "Text Timer",
            type: "TextTimer",
            location: { x: 10, y: 40 },
        },
        {
            name: "Score",
            type: "Score",
            location: { x: 240, y: 475 },
        },
        {
            name: "ScoreText",
            type: "Text",
            location: { x: 5, y: 475 },
            components: [
                {
                    type:"TextComponent",
                    values:[
                        {
                            key:"text",
                            value:"SCORE: "
                        },
                        {
                            key:"font",
                            value:"50pt Times"
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
            location: { x: 500, y: 350 },
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
                            value:"blue"
                        }
                    ]
                }
            ]
        }
    ]
}
