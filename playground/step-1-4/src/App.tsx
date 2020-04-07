import React from 'react';
import Counter from './components/Counter';

const App = (props: any) => {
  return (
    <div className="App">
      <Counter animal='dog' />
      <Counter animal='cat' />
    </div>
  );
}

export default App;
