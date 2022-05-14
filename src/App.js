import './App.css';
import React from 'react';
import StockForm from './Components/StockForm/StockForm';
import StockList from './Components/StockList/StockList';

function App() {
  let [stockItems, setStockItems] = React.useState([]);
  let [nextKey, setNextKey] = React.useState(1);
  const addStock = (name, ticker) => {
    setStockItems(
      [...stockItems, {name, ticker, key: nextKey}]
    );
    setNextKey(nextKey + 1);
  }
  const deleteStock = (targetKey) => {
    setStockItems(
      stockItems.filter(item => item.key !== targetKey)
    );
  }
  return (
    <div className="App">
      <header>
        <h2>
          Stock Watchlist
        </h2>
      </header>
      <main>
        <StockForm addStock={addStock} />
        <StockList items={stockItems} deleteStock={deleteStock} />
      </main>
    </div>
  );
}

export default App;
