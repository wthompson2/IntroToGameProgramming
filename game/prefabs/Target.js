export default {
  name: "Target",
  components:[
    {
      type:"TargetComponent",
      values:[
        {
          key:"radius",
          value:"25"
        },
        {
          key:"fill",
          value:"red"
        },
        {
          key:"stroke",
          value:"blue"
        },
      ]
    },
    {
      type:"TargetCollider",
      values:[
        {
          key:"radius",
          value:"25"
        }
      ]
    },
    {
      type:"TargetBehavior",
    },
  ]
}
