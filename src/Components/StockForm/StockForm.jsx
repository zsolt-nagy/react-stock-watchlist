import React, {useState} from 'react';
import './StockForm.css';

export default function StockForm(props) {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = document.querySelector('[name=name]').value;
    let ticker = document.querySelector('[name=ticker]').value;
    setName('');
    setTicker('');
    props.addStock(name, ticker);
  }
  const handleChange = (event, setter) => {
    setter(event.target.value);
  }
  return (
    <form 
      action="#" 
      method="GET" 
      className="stock-form"
      onSubmit={handleSubmit}>
        <label>
            Name: 
            <input 
              type="text" 
              name="name" 
              onChange={(event) => handleChange(event, setName)}
              value={name} />
        </label>        
        <label>
            Ticker:
            <input 
              type="text" 
              name="ticker" 
              onChange={(event) => handleChange(event, setTicker)}
              value={ticker} />
        </label>
        <button type="submit">Add</button>
    </form>
  )
}

