export default {
    name: "SceneGame",

    objects: [
        {
            name: "Text Timer",
            location: { x: 10, y: 10},
            components: [
                {
                    type:"TimeComponent",
                    values:[
                        {
                            key:"text",
                            value:"10"
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
            name: "Life1",
            location: { x: 20, y: 10},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"10"
                        },
                        {
                            key:"width",
                            value:"10"
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
            location: { x: 25, y: 10},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"10"
                        },
                        {
                            key:"width",
                            value:"10"
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
            location: { x: 30, y: 10},
            components: [
                {
                    type:"LifeComponent",
                    values:[
                        {
                            key:"height",
                            value:"10"
                        },
                        {
                            key:"width",
                            value:"10"
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
            location: { x: 10, y: 300},
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
            location: { x: 200, y: 300},
            components: [
                {
                    type:"PlayerComponent",
                    values:[
                        {
                            key:"height",
                            value:"30"
                        },
                        {
                            key:"width",
                            value:"10"
                        },
                        {
                            key:"fill",
                            value:"white"
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
            location: { x: 205, y: 300}, // x: ??, y: ??
            components: [
                {
                    type:"ArrowComponent",
                    values:[
                        {
                            key:"height",
                            value:"10"
                        },
                        {
                            key:"width",
                            value:"2"
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
            location: { x: 300, y: 50}, // x: ??, y: ??
            components: [
                {
                    type:"TargetComponent",
                    values:[
                        {
                            key:"height",
                            value:"30"
                        },
                        {
                            key:"width",
                            value:"10"
                        },
                        {
                            key:"fill",
                            value:"white"
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
