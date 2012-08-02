enyo.kind({
  kind: "slidedeck.Slide",
  name: "title",
  classes: 'title-slide',

  components: [
    {tag: "div", classes: "title-text", components: [
      {tag: "h1",  content: "EnyoJS Hackathon"},
      {tag: "h2",  content: "Ryan Rix"},
      {
        tag: "h2",
        components: [
          {
            tag: 'a',
            attributes: {href: 'http://twitter.com/rrrrrrrix/', target: '_blank'},
            content: "(@rrrrrrrix)"
          }
        ]
      },
      {tag: "h2",  content: "http://rrix-hackathon.nodester.com"},
      {tag: "h2",  content: "4 August 2012"}
    ]}
  ]
});
