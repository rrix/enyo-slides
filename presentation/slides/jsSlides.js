enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'jsSlides',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'EnyoJS Slides'
    },
    {
      kind: 'slidedeck.UnorderedList',
      initialItems: [
        'Subkind slidedeck.Slide for some small niceties',
        'Your kind name much match your JS file (ie jsSlides.js contains name: "jsSlides")',
        'Single depth unordered lists can be created using the slidedeck.UnorderedList kind.'
      ]
    },
    {
      tag: 'pre',
      content: '{\n  kind: \'slidedeck.UnorderedList\',\n  initialItems: [\n    \'Subkind slidedeck.Slide for some small niceties\',\n    \'Your kind name much match your JS file (ie jsSlides.js contains name: "jsSlides")\',\n    \'Single depth unordered lists can be created using the slidedeck.UnorderedList kind.\'\n  ]\n}'
    },
    {
      kind: 'slidedeck.UnorderedList',
      initialItems: [
        'Text will be scaled according to device using CSS media queries'
      ]
    }
  ]
});

