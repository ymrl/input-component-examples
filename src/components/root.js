import React from 'react';
import NormalInput from './normal_input';
import UncoolZenkakuInput from './uncool_zenkaku_input';
import CoolZenkakuInput from './cool_zenkaku_input';
import UncoolKatakanaInput from './uncool_katakana_input';
import CoolKatakanaInput from './cool_katakana_input';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      normalInputValue: '',
      uncoolZenkakuInputValue: '',
      coolZenkakuInputValue: '',
      uncoolKatakanaInputValue: '',
      coolKatakanaInputValue: ''
    };
  }

  render() {
    return(
      <div>
        <h1>Input Component Examples</h1>

        <section>
          <h1>普通の &lt;input type="text" /&gt;</h1>
          <input type="text" />
        </section>

        <section>
          <h1>値を拾う</h1>
          <input type="text" value={ this.state.value }
            onChange={(e)=>this.setState({ value: e.target.value })} />
          <p>{this.state.value}</p>
        </section>

        <section>
          <h1>onChange でハンドリングするComponent</h1>
          <NormalInput value={this.state.normalInputValue}
            onChange={this.handleInputChange.bind(this, 'normalInputValue')} />
          <p>{this.state.normalInputValue}</p>
        </section>

        <section>
          <h1>あまりよくない感じの全角英数入力Component</h1>
          <UncoolZenkakuInput value={this.state.uncoolZenkakuInputValue}
            onChange={this.handleInputChange.bind(this, 'uncoolZenkakuInputValue')} />
          <p>{this.state.uncoolZenkakuInputValue}</p>
        </section>

        <section>
          <h1>わりといい感じの全角英数入力Component</h1>
          <CoolZenkakuInput value={this.state.coolZenkakuInputValue}
            onChange={this.handleInputChange.bind(this, 'coolZenkakuInputValue')} />
          <p>{this.state.coolZenkakuInputValue}</p>
        </section>

        <section>
          <h1>あまりよくない感じのカタカナ入力Component</h1>
          <UncoolKatakanaInput value={this.state.uncoolKatakanaInputValue}
            onChange={this.handleInputChange.bind(this, 'uncoolKatakanaInputValue')} />
        </section>
        <section>
          <h1>いい感じのカタカナ入力Component</h1>
          <CoolKatakanaInput value={this.state.coolKatakanaInputValue}
            onChange={this.handleInputChange.bind(this, 'coolKatakanaInputValue')} />
        </section>
      </div>
    );
  }

  handleInputChange(propName, _e, value) {
    const newState ={};
    newState[propName] = value;
    this.setState(newState);
  }
}
