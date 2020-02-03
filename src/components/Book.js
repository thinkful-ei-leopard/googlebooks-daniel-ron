import React from 'react';

function getPrice(book) {
    
    let bookPrice = '';
    if (book.saleInfo.saleability==='Free') {
        bookPrice = 'Free';
    } 
    else if (book.saleInfo.saleability==='NOT_FOR_SALE') {
        bookPrice = 'Not for Sale';
    }
    else {
        
        bookPrice = book.saleInfo.retailPrice.amount;
        console.log(bookPrice);
    }
    return bookPrice;
}

function Book (props) {

    // some function
    // if property does NOT exist
    //      check if another size/value/etc exists
    //      and set it to that value

    return (
        <div className='book-div'>
            {/* {console.log(props.state.volumeInfo.title)} */}
            <h2>{props.state.volumeInfo.title}</h2>
            {/* Will give authors array */}
            <p className='author'>{props.state.volumeInfo.authors} </p> 
            {/* Some books don't have a sale price. 
                If no sale price, print FREE instead*/}
            <p className='price'>{getPrice(props.state)} </p>
            <p className='description'>{props.state.description}</p>
            <img src={props.state.imageLinks.thumbnail} alt={props.state.title}></img>
        </div>
    );
}

export default Book;