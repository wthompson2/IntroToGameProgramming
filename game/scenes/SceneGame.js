export default {
    name: "SceneGame",

    objects: [
        {
            name:"Target Demo",
            location: { x: 0, y: 0 },
            type: "TargetDemo"
        },
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
            name: "Enter",
            type: "Target",
            location: { x: 500, y: 350 }
        }
    ]
}
