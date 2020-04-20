export default {
    name: "SceneStart",
  
    objects: [
    {
        name: "Text",
        location: { x: 200, y: 200 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"PRESS 'SPACEBAR' TO START"
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
      }
    ]
}
