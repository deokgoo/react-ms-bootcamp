import React, { useState } from 'react';
import './Button.css'

interface buttonProps {
  onClick: (e: React.FormEvent) => void
}

export const Button = (props: buttonProps) => {
  const { onClick } = props;
  const [clicks, setClicks] = useState(0);
  setClicks(5);

  return (
    <button className="Button" onClick={onClick}>
      click : {clicks}
    </button>
  );
}
