export default {
  name: "TextTimer",
  components:[
    {
      type:"TextComponent",
      values:[
        {
          key:"text",
          value:"5"
        },
        {
          key:"font",
          value:"35pt Times"
        },
        {
          key:"fill",
          value:"black"
        },
      ]
    },
    {
      type:"TimeBehavior",
    }
  ]

}
