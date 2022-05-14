import './App.css';
import React from 'react';
import StockForm from './Components/StockForm/StockForm';
import StockList from './Components/StockList/StockList';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function App() {
  let [stockItems, setStockItems] = React.useState([]);
  let [nextKey, setNextKey] = React.useState(1);

  const move = (key, isUp) => {
    let newStockItems = [...stockItems];
    for (let i = 0; i < newStockItems.length; i++) {
      if (key === newStockItems[i].key) {
        if (isUp && i === 0) return;
        if (!isUp && i === newStockItems.length - 1) return;
        let otherIndex = isUp ? i - 1 : i + 1;
        swap(newStockItems, otherIndex, i);
        setStockItems(newStockItems);
        return;
      }
    }
  }

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
        <StockList 
          items={stockItems} 
          deleteStock={deleteStock}
          move={move} />
      </main>
    </div>
  );
}

export default App;
