export default {
    name: "SceneCountdown",
  
    objects: [
    {
        name: "Text3",
        type: "Text",
        location: { x: 115, y: 175 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"3..."
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
        name: "Text2",
        type: "Text",
        location: { x: 275, y: 175 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"2..."
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
        name: "Text1",
        type: "Text",
        location: { x: 425, y: 175 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"1..."
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
        name: "TextStart",
        type: "Text",
        location: { x: 200, y: 300 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"START!"
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
