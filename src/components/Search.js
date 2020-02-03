import React from 'react';


function Search(props) {
    return (
    <form onSubmit={ () => props.searchBook()} className="search-div">
        <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" name="search-input"></input>
        <button type="submit">Search</button>
    </form >
    );
}

export default Search;