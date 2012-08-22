enyo.kind( {
  kind: 'slidedeck.Slide',
  name: 'slidedeck.HTMLSlide',

  published: {
    url: ""
  },

  create: function() {
    this.inherited(arguments);

    this.ajaxFetch = new enyo.Ajax( {url: this.url} );
    this.ajaxFetch.handleAs = 'text';
    this.ajaxFetch.response( function(inSender, inResponse) {
      var newComp = this.createComponent({kind: 'enyo.Control'});
      newComp.allowHtml = true;
      newComp.setContent(inResponse);
      this.render();
    }.bind(this));
    this.ajaxFetch.go();
  }
});
