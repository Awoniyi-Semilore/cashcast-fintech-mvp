import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  padding = 'lg',
  hover = true,
  glow = false,
  onClick
}) => {
  return (
    <div 
      className={`card card-padding-${padding} ${hover ? 'card-hover' : ''} ${glow ? 'card-glow' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
