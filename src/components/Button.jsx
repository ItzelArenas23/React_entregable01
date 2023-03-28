import React from 'react';
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
  <div>
    <button className="button" onClick={handleNewQuote}><img src="/espacio/Vector.png" alt="" /></button>
  </div>

  )
}

export default Button;



