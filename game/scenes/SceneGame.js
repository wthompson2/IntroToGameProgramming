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
            name: "Life1",
            type: "Life",
            location: { x: 70, y: 25},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"35"
                        },
                        {
                            key:"width",
                            value:"35"
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
        },
        {
            name: "Life2",
            type: "Life",
            location: { x: 110, y: 25},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"35"
                        },
                        {
                            key:"width",
                            value:"35"
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
        },
        {
            name: "Life3",
            type: "Life",
            location: { x: 150, y: 25},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"35"
                        },
                        {
                            key:"width",
                            value:"35"
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
            name: "Player",
            type: "Player",
            location: { x: 325, y: 450},
            components: [
                {
                    type:"PlayerComponent",
                    values:[
                        {
                            key:"height",
                            value:"50"
                        },
                        {
                            key:"width",
                            value:"50"
                        },
                        {
                            key:"fill",
                            value:"blue"
                        },
                        {
                            key:"stroke",
                            value:"black"
                        }
                    ]
                }
            ]
        },
        {
            // How to add x number of arrows when clicked?
            name: "Arrow",
            type: "Arrow",
            location: { x: 325, y: 410}, // x: ??, y: ??
            components: [
                {
                    type:"ArrowComponent",
                    values:[
                        {
                            key:"height",
                            value:"25"
                        },
                        {
                            key:"width",
                            value:"1"
                        },
                        {
                            key:"stroke",
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
