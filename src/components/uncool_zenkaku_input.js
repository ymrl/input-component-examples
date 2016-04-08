import React from 'react';

export default class UncoolZenkakuInput extends React.Component {
  handleChange(e) {
    const value = e.target.value.replace(/[!-~]/g, (chr) =>
      String.fromCharCode(chr.charCodeAt(0) + 0xFEE0)
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
