enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'enyoslides',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'EnyoSlides - EnyoJS as a Web Toolkit',
      classes: 'top-toolbar'
    },
    {
      kind: 'enyo.Image',
      classes: 'right-photo',
      src: '$presentation/assets/images/enyoslides.png'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Developed in three weeks to show off Enyo'
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Typical pure JS application stack'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Node.JS, ExpressJS, MongoDB, Socket.io, EnyoJS (Duh!)'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Heavy focus on re-usability'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'ExpressJS backend designed to dynamically pull slides'
                },
                {
                  tag: 'li',
                  content: 'Reuses code from community gallery'
                },
                {
                  tag: 'li',
                  content: 'As much code as possible is placed in $lib for eventual gallery inclusion'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
