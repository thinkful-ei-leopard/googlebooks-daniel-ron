import React from 'react';

function Filter() {

    return (
        <fieldset className="filter-div">
            <label htmlFor="filter-print-type">Print Type: </label>
            <select id="filter-print-type" name="filter-print-type">
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>

            <label htmlFor="filter-book-type">Print Type: </label>
            <select id="filter-book-type" name="filter-book-type">
                <option value="partial">Partial text viewable</option>
                <option value="full">Full text viewable</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
                <option value="ebooks">eBooks</option>
            </select>
        </fieldset>

    );
}

// <label for="pet-select">Choose a pet:</label>

// <select name="pets" id="pet-select">
//     <option value="">--Please choose an option--</option>
//     <option value="dog">Dog</option>
//     <option value="cat">Cat</option>
//     <option value="hamster">Hamster</option>
//     <option value="parrot">Parrot</option>
//     <option value="spider">Spider</option>
//     <option value="goldfish">Goldfish</option>
// </select>

export default Filter;