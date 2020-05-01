
export default {
    name: "SceneFinish",
  
    objects: [
      {
        name: "Scene listener",
        location: { x: 0, y: 0 },
        type: "SceneTransition",
      },
      {
        name: "Text Top",
        type: "Text",
        location: { x: 25, y: 125 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"GAME OVER"
            },
            {
                key:"font",
                value:"75pt Times"
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
        name: "Score",
        type: "Score",
        location: { x: 515, y: 200 },
      },
      {
        name: "Text Middle",
        type: "Text",
        location: { x: 75, y: 200 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"Your score was:"
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
        type: "Text",
        location: { x: 120, y: 350 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"Press 'ENTER' to play again"
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
