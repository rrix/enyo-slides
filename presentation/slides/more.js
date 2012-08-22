enyo.kind({
  name: 'more',
  kind: 'slidedeck.Slide',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'But wait, there\'s more!'
    },
    {
      kind: 'slidedeck.UnorderedList',
      initialItems: [
        'Include question.js at the end of your slide list and any questions asked on the pullout will show up there'
      ]
    }
  ]

});
