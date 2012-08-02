enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'cah',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Inhumanity - Cross Platform Card Game',
      classes: 'top-toolbar'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Hybrid web application/mobile application'
        },
        {
          tag: 'li',
          content: 'Heavy usage of Node.js and Socket.io'
        },
        {
          tag: 'li',
          content: 'Frontend built using Enyo Canvas API'
        },
        {
          tag: 'li',
          content: 'Will end up in app stores, eventually'
        }
      ]
    }
  ]
});

