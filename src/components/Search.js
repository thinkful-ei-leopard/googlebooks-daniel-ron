import React from 'react';


function Search(props) {
    return (
    <div className="search-div">
        <label htmlFor="search-input">Search: </label>
        <input type="text" id="search-input" name="search-input"></input>
        <button type="submit">Search</button>
    </div>
    );
}

export default Search;