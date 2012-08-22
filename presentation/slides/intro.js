enyo.kind({
  name: 'intro',
  kind: 'slidedeck.Slide',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'EnyoSlides Makes Responsive HTML and EnyoJS Slides Simple!'
    },
    {
      kind: 'slidedeck.UnorderedList',
      initialItems: [ 'Simply build your slides in HTML',
                      'Anything in Enyo can be done on these slides in Real Time.',
                      'Live code demos, too!',
                      'Presenter mode syncs your position with all of the clients, giving you a cool remote control',
                      'Interactive Question and Answer slide-out and a page which pulls all of the questions together',
                      'You can also build the slides in EnyoJS for that extra WOW factor']
    }
  ]
});
