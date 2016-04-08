import React from 'react';
import ReactDOM from 'react-dom';

export default class CoolKatakanaInput extends React.Component {
  constructor(props) {
    super();
    this.state = { showValue: props.value };
  }

  componentWillReceiveProps(props) {
    const element = ReactDOM.findDOMNode(this);
    if (element !== document.activeElement) {
      this.setState({ showValue: props.value});
    }
  }

  handleChange(e) {
    const inputValue = e.target.value;
    const value = inputValue.replace(/[ぁ-ゖ]/g, (chr) =>
      String.fromCharCode(chr.charCodeAt(0) + 0x60)
    );
    this.setState({ showValue: inputValue});
    this.props.onChange(e, value);
  }

  handleBlur() {
    this.setState({ showValue: this.props.value});
  }

  render() {
    return(
      <input type="text" value={this.state.showValue}
        onChange={this.handleChange.bind(this)}
        onBlur={this.handleBlur.bind(this)} />
    );
  }
}
