import React from 'react';
import Search from './components/Search';
import Filter from './components/Filter';
import Results from './components/Results';

import './App.css';

class App extends React.Component {

  state = {
    kind: '',
    items: [],
    totalItems: 0,
    searchInput:'',
    printType:'',
    filter:'',
    selectedId: ''
  };

  // If dropdown is selected (BOOK OR PRINT TYPE)
  // setState to update that data (printType and bookType)
  // use that DATA to make GET request
  // with that RESP, update state
  handleDivClick = (clicked) => {
    console.log('clicked');
    this.setState({
      selectedId: clicked
    })
  }
  
  handleDropdownSelection = (selected) => {
    console.log(selected);
    if (this.state.searchInput !== '') {
      let res = selected.charAt(0);
      if (res === 'p') {
        this.setState({
          printType: selected
        });
        
      } else {
        this.setState({
          filter: selected,
        });
      }
      
      const URL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&${this.state.printType}&${this.state.bookType}&key=AIzaSyA26sUh6FAvgtPAuU3gtCpzGBdN7Yyd5IU`
      console.log(URL);
    
      console.log('no search input');
  
      fetch(URL)
      .then(res => res.json())
      .then(resJson => this.setState( {items: resJson.items,})
      );
    }
  };

  handleSearchClick = (searchInput) => {
    // when button is clicked,
    // GET DATA FROM INPUT,
    // use DATA to make GET request
    // with that RESP, update state
    console.log(searchInput);
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}${this.state.printType}${this.state.bookType}&key=AIzaSyA26sUh6FAvgtPAuU3gtCpzGBdN7Yyd5IU`;
    console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(resJson => this.setState( {items: resJson.items, searchInput: searchInput })
      );
  };
  
  // componentDidMount() {
  //   // this.handleDropdownSelection();
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search searchBook={this.handleSearchClick} />
        <Filter dropdownSelection={this.handleDropdownSelection}/>
        <Results state={this.state} divClick={this.handleDivClick} />
      </div>
    );
  }

}

export default App;
