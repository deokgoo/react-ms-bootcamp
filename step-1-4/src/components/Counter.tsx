import React from 'react';
import { Button } from './Button';

class Counter extends React.Component<{subject: string}, {count: number}> {
  constructor(props: {subject: string}){
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { subject } = this.props;
    const { count } = this.state;
    return (
      <div>
        {subject}: {count}
        <Button onClick={this._onButtonClick}>Click</Button>
      </div>
    )
  }

  _onButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

export default Counter;