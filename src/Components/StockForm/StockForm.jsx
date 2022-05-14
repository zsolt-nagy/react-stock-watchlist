import React from 'react';
import './StockForm.css';

export default function StockForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = document.querySelector('[name=name]').value;
    let ticker = document.querySelector('[name=ticker]').value;
    props.addStock(name, ticker);
  }
  return (
    <form 
      action="#" 
      method="GET" 
      className="stock-form"
      onSubmit={handleSubmit}>
        <label>
            Name: 
            <input type="text" name="name" />
        </label>        
        <label>
            Ticker:
            <input type="text" name="ticker" />
        </label>
        <button type="submit">Add</button>
    </form>
  )
}

