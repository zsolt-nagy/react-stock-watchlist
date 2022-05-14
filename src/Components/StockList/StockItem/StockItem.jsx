import React from 'react';

export default function StockItem(props) {
  let handleClick = () => {
    props.deleteStock(props.id);
  }
  return (
    <li>
        {props.name} ({props.ticker})
        <button onClick={handleClick}>Delete</button>
    </li>
  )
}
