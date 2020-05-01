export default {
    name: "Score",
    components:[
      {
        type:"TextComponent",
        values:[
          {
            key:"text",
            value:"0"
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
      },
      {
          type: "ScoreBehavior",
      }
    ]
  
  }
  