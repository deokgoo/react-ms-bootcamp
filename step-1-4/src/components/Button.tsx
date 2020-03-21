import React from 'react';
import './Button.css';

interface button_props {
  
}

export const Button = (props: any) => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
