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
  };

  // If dropdown is selected (BOOK OR PRINT TYPE)
  // setState to update that data (printType and bookType)
  // use that DATA to make GET request
  // with that RESP, update state

  
  handleDropdownSelection = (selected) => {
    let res = selected.charAt(0);
    if (res === 'p') {
      // console.log(`printType: ${selected}`);
      this.setState({
        printType: selected
      });
      
    } else {
      // console.log(`filter ${selected}`);
      this.setState({
        filter: selected,
      });
    }
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&${this.state.printType}&${this.state.bookType}&key=AIzaSyA26sUh6FAvgtPAuU3gtCpzGBdN7Yyd5IU`
    console.log(URL);
    
    if (this.state.searchInput === '') {
      console.log('no search input');
    } else {
      fetch(URL)
      .then(res => res.json())
      .then(resJson => this.setState( {items: resJson.items,})
      );
    }
    // this.setState({printType: , bookType: })
  };

  handleSearchClick = (searchInput) => {
    // when button is clicked,
    // GET DATA FROM INPUT,
    // use DATA to make GET request
    // with that RESP, update state
    console.log(searchInput);
    // GET https://www.googleapis.com/books/v1/volumes?q={search terms}
    // https://www.googleapis.com/books/v1/volumes?q=Test&filter=ebooks
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?`;
    //printType = &filter=WHATEVERTHEVALUEIS
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}${this.state.printType}${this.state.bookType}&key=AIzaSyA26sUh6FAvgtPAuU3gtCpzGBdN7Yyd5IU`;
    fetch(URL)
      .then(res => res.json())
      .then(resJson => this.setState( {items: resJson.items, searchInput: searchInput })
      );
    // update state
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
        <Results state={this.state} />
      </div>
    );
  }

}

export default App;
