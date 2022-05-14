import React from 'react';
import './StockList.css';
import StockItem from './StockItem/StockItem';

export default function StockList(props) {
  let stockItemsJsx = props.items.map( item =>
    <StockItem 
        name={item.name} 
        ticker={item.ticker}
        key={item.key}
        id={item.key}
        deleteStock={props.deleteStock}
        move={props.move} />  
  );
  return (
    <ul className="watch-list">
        {stockItemsJsx}
    </ul>
  )
}
