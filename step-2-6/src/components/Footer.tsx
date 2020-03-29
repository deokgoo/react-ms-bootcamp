import React from 'react';
import { connect } from 'react-redux';
import { clear } from '../reducers/todoList/action';

const Footer = (props: any) => {

  return (
    <footer>
      {/*<span>{itemCount} item{itemCount>1?"s":""} left</span>*/}
      <button className="submit" onClick={props.clear}>Clear Completed</button>
    </footer>
  );
};

export default connect(null,{ clear } )(Footer);
