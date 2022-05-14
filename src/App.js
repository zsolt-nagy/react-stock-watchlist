import './App.css';
import React from 'react';
import StockForm from './Components/StockForm/StockForm';
import StockList from './Components/StockList/StockList';

function App() {
  let [stockItems, setStockItems] = React.useState([
    {
      name: 'Alibaba',
      ticker: 'BABA', 
      key: 1
    },
    {
      name: 'Barrick Gold',
      ticker: 'GOLD',
      key: 2
    },
    {
      name: 'AT&T', 
      ticker: 'T', 
      key: 3
    },
    {
      name: 'Starbucks',
      ticker: 'SBUX',
      key: 4
    }
  ]);
  let [nextKey, setNextKey] = React.useState(5);
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
