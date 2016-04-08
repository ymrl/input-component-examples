import React from 'react';
export default class NormalInput extends React.Component {
  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(e, value);
  }

  render() {
    return(
      <input type="text" value={this.props.value}
        onChange={this.handleChange.bind(this)} />
    );
  }
}
