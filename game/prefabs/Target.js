export default {
  name: "Target",
  components:[
    {
      type:"TargetComponent",
      values:[
        {
          key:"radius",
          value:"0"
        },
        {
          key:"fill",
          value:"white"
        },
        {
          key:"stroke",
          value:"black"
        },
      ]
    },
    {
      type:"TargetBehavior",
    },
  ]
}
