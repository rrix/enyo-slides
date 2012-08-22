enyo.kind({
  name: 'slidedeck.UnorderedList',
  tag:  'ul',

  published: {
    initialItems: []
  },

  /*
   * Adds a new text to the list
   */
  push: function( text ) {
    this.createComponent( { tag: 'li', content: text } );
    this.render();
  },

  /*
   * Destroys the last component of the list and rerenders
   */
  pop: function() {
    this.components.last.destroy();
  },

  create: function() {
    this.inherited(arguments);

    enyo.forEach(this.initialItems, enyo.bind(this, function(item) {
      console.log(this);
      this.push(item);
    }));
  }
});
