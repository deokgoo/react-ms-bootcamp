import React from 'react';

export interface TestMeProps {
  name: string;
}

export interface TestMeState {
  enabled: boolean;
}

export const TestMe = (props: TestMeProps) => {
  return (
    <div id="testMe">
      <InnerMe name={props.name} />
    </div>
  );
};

export class InnerMe extends React.Component<TestMeProps, TestMeState> {
  state = {
    enabled: false
  };

  onMouseOver = () => {
    this.setState({ enabled: true });
  };

  render() {
    let { name } = this.props;
    return !this.state.enabled ? (
      <div onMouseOver={this.onMouseOver} id="innerMe">
        Hello {name}, Hover Over Me
      </div>
    ) : (
      <div id="innerMe">Enabled</div>
    );
  }
}
