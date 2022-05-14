import React from 'react';

export default function StockItem(props) {
  let handleDeleteClick = () => {
    props.deleteStock(props.id);
  }
  let handleUpClick = () => {
    props.move(props.id, true);
  }
  let handleDownClick = () => {
    props.move(props.id, false);
  }
  return (
    <li>
        {props.name} ({props.ticker})
        <button onClick={handleUpClick}>Up</button>
        <button onClick={handleDownClick}>Down</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}
