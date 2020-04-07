import React from 'react';
import { Button } from './Button';

interface counterProps {
  animal: string
}

interface counterState {
  clicks: number
}

class Counter extends React.Component<counterProps, counterState> {
  constructor(props: counterProps) {
    super(props);
    this.state = {
      clicks: 0,
    }
    this._onClick = this._onClick.bind(this);
  }

  render() {
    const { animal } = this.props;
    const { clicks } = this.state;
    return (
      <div>
        {animal}: {clicks}
        <Button onClick={this._onClick}></Button>
      </div>
    );
  }

  _onClick(e: React.FormEvent) {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }
}

export default Counter;