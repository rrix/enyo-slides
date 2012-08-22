enyo.kind({
  name: 'theBasics',
  kind: 'slidedeck.Slide',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Basics on EnyoSlides'
    },
    {
      kind: 'FittableColumns',
      components: [
        {
          fit: true,
          components: [
            {
              kind: 'slidedeck.UnorderedList',
              initialItems: [ 'slides are stored in presentation/',
                              'Loaded in to the application using a special package.js loader function called registerSlides'],
              fit:true
            },
            {
              style: 'border: 1px solid black;',
              fit: true,
              tag: 'pre',
              content: 'registerSlides( "slide1.js", \r\t\t"slide2.html", \r\t\t"codeDemo.js");'
            },
            {
              kind: 'slidedeck.UnorderedList',
              initialItems: [ 'Slides appear in the order they are registered' ]
            }
          ]
        },
        {
          style: 'margin: 25px',
          kind: 'Node',
          fit: true,
          content: 'enyo-slides/',
          components: [
            {
              content: 'index.html, etc...'
            },
            {
              content: 'presentations/',
              components: [
                {
                  content: 'assets/',
                  components: [
                    {
                      content: 'code/',
                      components: [
                        {
                          content: 'sample1.js'
                        }
                      ]
                    }
                  ]
                },
                {
                  content: 'slides/',
                  components: [
                    {
                      content: 'package.js'
                    },
                    {
                      content: 'slide1.js'
                    },
                    {
                      content: 'slide2.html'
                    },
                    {
                      content: 'codeDemo.js'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
