import React from 'react';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

class App extends React.Component {

  state = {
    kind: '',
    items: [],
    totalItems: 0
  };
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search />
        <Filter />
      </div>
    );
  }

}

export default App;
