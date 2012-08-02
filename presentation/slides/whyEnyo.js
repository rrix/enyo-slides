enyo.kind({
  kind: "slidedeck.Slide",
  name: "whyEnyo",

  components: [
    {
      kind: 'onyx.Toolbar',
      classes: 'top-toolbar',
      content: 'So ... Why Enyo? Why are we here?'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Cross Platform Development'
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Easy to use'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Object Oriented'
                },
                {
                  tag: 'li',
                  content: 'Instant Feedback'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          content: 'Gorgeous Interface'
        },
        {
          tag: 'li',
          content: 'Extensible and reusable'
        },
        {
          tag: 'li',
          content: 'Awesome Community'
        }
      ]
    }
  ]
});
