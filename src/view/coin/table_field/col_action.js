export default ({ width, title, buttons } = {}) => {
  return [
    {
      title: title || '操作',
      key: 'action',
      width: width || 150,
      align: 'center',
      render: (h, params) => {
        buttons = buttons || []
        buttons = buttons.map(ele => {
          return h('Button', {
            props: {
              type: ele.type,
              size: ele.size
            },
            style: {
              marginRight: '5px'
            },
            on: event
          }, ele.name)
        })
        return h('div', buttons)
      }
    }
  ]
}
