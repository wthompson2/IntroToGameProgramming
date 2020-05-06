export default {
    name: "SceneStart",
  
    objects: [
      {
        name: "Scene listener",
        location: { x: 0, y: 0 },
        type: "SceneTransition"
      },
      {
        name: "Title",
        type: "Text",
        location: { x: 40, y: 150 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"BUTTON MASHER"
            },
            {
                key:"font",
                value:"50pt Times"
            },
            {
                key:"fill",
                value:"red"
            }
          ]
          }
        ]
      },
      {
        name: "Title",
        type: "Text",
        location: { x: 120, y: 200 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"~Test Your Speed~"
            },
            {
                key:"font",
                value:"35pt Times"
            },
            {
                key:"fill",
                value:"red"
            }
          ]
          }
        ]
      },
      {
        name: "Enter",
        type: "Text",
        location: { x: 130, y: 350 },
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
