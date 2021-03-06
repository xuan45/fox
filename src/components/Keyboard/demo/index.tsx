import React from 'react';
import Input from '../../Input';
import Keyboard from '..';
import '../style';
import '../../Icon/style';
import '../../Input/style';

class Demo extends React.Component {
  state = {focus: false};
  render() {
    return (
      <React.Fragment>
        <Input onFocus={() => this.setState({focus: true})} />
        <div style={{margin: 20}}>
          <Keyboard
            count={6}
            random
            active={this.state.focus}
            onClose={() => this.setState({focus: false})}
            onFinish={(values: Array<any>) => {
              console.log(values);
            }}
            title="请输入密码"
          />
        </div>
        <input
          type="password"
          maxLength={1}
          style={{
            padding: 0,
            lineHeight: 1,
            height: '24px',
            width: '50px',
            border: 'none',
            fontSize: '50px',
            textAlign: 'center',
          }}
        />
      </React.Fragment>
    );
  }
}

export default Demo;
