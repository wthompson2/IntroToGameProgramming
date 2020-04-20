// import SceneGame from "./SceneGame";

export default {
    name: "SceneFinish",
  
    objects: [
    {
        name: "Text Top",
        location: { x: 200, y: 100 },
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
        name: "Text Middle",
        location: { x: 200, y: 150 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"Your score was x!"
                // value:"Your score was " + SceneGame.score + "!"
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
        name: "Text Bottom",
        location: { x: 200, y: 250 },
        components: [
          {
            type:"TextComponent",
            values:[
            {
                key:"text",
                value:"Press 'SPACEBAR' to play again"
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
