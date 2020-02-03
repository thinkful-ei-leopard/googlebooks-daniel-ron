import React from 'react';


function Search(props) {
    return (
        // event.target["search-input"].value
    <form onSubmit={ (event) => {
        event.preventDefault();
        props.searchBook(event.target['search-input'].value);
        event.target.reset();
    }
} 
    className="search-div">
        <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" name="search-input"></input>
        <button type="submit">Search</button>
    </form>
    );
}

export default Search;