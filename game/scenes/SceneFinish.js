// import SceneGame from "./SceneGame";

export default {
    name: "SceneFinish",
  
    objects: [
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
        name: "Text Middle",
        type: "Text",
        location: { x: 75, y: 200 },
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
        type: "Text",
        location: { x: 100, y: 350 },
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
