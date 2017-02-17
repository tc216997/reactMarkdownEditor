'use strict';

var container = document.getElementById('container');
var initialText = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nChinese cooking trinity:\n\n  * Ginger\n  * Scallion\n  * Garlic\n\nNumbered list:\n\n  1. Ginger\n  2. Scallion\n  3. Garlic\n\nI know---not no---now how to \nstart coding in React.js.\n\n *[Terry Chong](https://freecodecamp.com/tc216997)*';
var TextBox = React.createClass({
  displayName: 'TextBox',

  //set beginning text to default text
  getInitialState: function getInitialState() {
    return {
      text: marked(initialText)
    };
  },
  updateValue: function updateValue(event) {
    // parse textarea and update the text in state
    var newText = this.setState({ text: marked(event.target.value) });
  },
  htmlMarkup: function htmlMarkup() {
    return { __html: this.state.text };
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'textarea',
        { className: 'col-md-6',
          cols: '20',
          rows: '27',
          id: 'textBox',
          onChange: this.updateValue },
        initialText
      ),
      React.createElement(
        'div',
        { className: 'col-md-6', id: 'markedText' },
        React.createElement('div', { id: 'markedupText', dangerouslySetInnerHTML: { __html: this.state.text } })
      )
    );
  }
});

ReactDOM.render(React.createElement(TextBox, null), container);