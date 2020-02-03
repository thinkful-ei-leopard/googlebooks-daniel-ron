import React from 'react';

function Filter(props) {

    return (
        <fieldset className="filter-div">
            <label htmlFor="filter-print-type">Print Type: </label>
            <select onChange={ (event) => props.dropdownSelection(event.target.value)}id="filter-print-type" name="filter-print-type">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            {/* // props.searchBook(event.target['search-input'].value); */}
            <label htmlFor="filter-book-type">Book Type: </label>
            <select onChange={(event) => props.dropdownSelection(event.target.value)} id="filter-book-type" name="filter-book-type">
                <option value=''>No Filter</option>
                <option value="partial">Partial text viewable</option>
                <option value="full">Full text viewable</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
                <option value="ebooks">eBooks</option>
            </select>
        </fieldset>

    );
}


export default Filter;