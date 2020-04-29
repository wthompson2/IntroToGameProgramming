export default {
    name: "SceneStart",
  
    objects: [
      {
        name: "Scene listener",
        location: {x:0, y:0},
        type: "SceneTransition",
      },
      {
        name: "Enter",
        type: "Text",
        location: { x: 110, y: 250 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"PRESS 'ENTER' TO START"
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
