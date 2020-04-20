export default {
    name: "SceneCountdown",
  
    objects: [
    {
        name: "Text3",
        location: { x: 100, y: 100 },
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
        location: { x: 200, y: 100 },
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
        location: { x: 300, y: 100 },
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
        location: { x: 200, y: 200 },
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
