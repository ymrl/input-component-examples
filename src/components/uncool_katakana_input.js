import React from 'react';
import ReactDOM from 'react-dom';

export default class UncoolKatakanaInput extends React.Component {
  componentWillUpdate() {
    const element = ReactDOM.findDOMNode(this);
    this.selectionStart = element.selectionStart;
    this.selectionEnd = element.selectionEnd;
  }

  componentDidUpdate() {
    const element = ReactDOM.findDOMNode(this);
    if (element === document.activeElement) {
      element.setSelectionRange(this.selectionStart, this.selectionEnd);
    }
  }

  handleChange(e) {
    const value = e.target.value.replace(/[ぁ-ゖ]/g, (chr) =>
      String.fromCharCode(chr.charCodeAt(0) + 0x60)
    );
    this.props.onChange(e, value);
  }

  render() {
    return(
      <input type="text"
        value={this.props.value}
        onChange={this.handleChange.bind(this)} />
    );
  }
}
