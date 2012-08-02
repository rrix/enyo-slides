enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'hsllock',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'HslLock - A Study in Rapid Prototyping',
      classes: 'top-toolbar'
    },
    {
      kind: 'enyo.Image',
      classes: 'right-photo',
      src: '$presentation/assets/images/hsllock.png'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Hackerspace Access Control'
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Replaced generic CGI scripts'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Originally developed in Enyo1 in about two weeks'
                },
                {
                  tag: 'li',
                  content: 'Ported to Enyo2 when Enyo2b2 is released'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          content: 'Easily parse arbitrary data from remote services'
        },
        {
          tag: 'li',
          content: "Deployed to webOS, Android and iOS through Phonegap"
        }
      ]
    }
  ]

});
