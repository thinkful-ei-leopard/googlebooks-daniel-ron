import React from 'react';

function Filter(props) {

    return (
        <fieldset className="filter-div">
            <label htmlFor="filter-print-type">Print Type: </label>
            <select onChange={ (event) => props.dropdownSelection(event.target.value)} id="filter-print-type" name="filter-print-type">
                <option value="printType=all">All</option>
                <option value="printType=books">Books</option>
                <option value="printType=magazines">Magazines</option>
            </select>
            {/* // props.searchBook(event.target['search-input'].value); */}
            <label htmlFor="filter-book-type">Book Type: </label>
            <select onChange={(event) => props.dropdownSelection(event.target.value)} id="filter-book-type" name="filter-book-type">
                <option value=''>No Filter</option>
                <option value="filter=partial">Partial text viewable</option>
                <option value="filter=full">Full text viewable</option>
                <option value="filter=free-ebooks">Free eBooks</option>
                <option value="filter=paid-ebooks">Paid eBooks</option>
                <option value="filter=ebooks">eBooks</option>
            </select>
        </fieldset>

    );
}


export default Filter;