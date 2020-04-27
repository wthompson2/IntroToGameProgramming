export default {
    name: "SceneStart",
  
    objects: [
    {
        name: "Text",
        type: "Text",
        location: { x: 90, y: 250 },
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
                value:"25pt Times"
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
