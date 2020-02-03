import React from 'react';
import Search from './components/Search';
import Filter from './components/Filter';
import Results from './components/Results';

import './App.css';

class App extends React.Component {

  state = {
    kind: '',
    items: [],
    totalItems: 0
  };

  handleSearchClick = () => {
    // when button is clicked, make GET request
    // with that RESP, update state
    console.log('working');
    // GET https://www.googleapis.com/books/v1/volumes?q={search terms}

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${SERACH INPUT}&key=AIzaSyA26sUh6FAvgtPAuU3gtCpzGBdN7Yyd5IU`)
      .then(res => res.json())
      .then(res => console.log(res));
    // update state
    this.setState( {
     
    });

  };
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search searchBook={this.handleSearchClick} />
        <Filter />
        <Results state={this.state} />
      </div>
    );
  }

}

export default App;
