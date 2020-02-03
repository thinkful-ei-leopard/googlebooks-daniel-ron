import React from 'react';

function getPrice(book) {
    
    let bookPrice = '';
    if (book.saleInfo.saleability==='Free') {
        bookPrice = 'Free';
    } 
    else if (book.saleInfo.saleability==='NOT_FOR_SALE') {
        bookPrice = 'Not for Sale';
    }
    else if (book.saleInfo.saleability==='FOR_SALE') {
        bookPrice = book.saleInfo.retailPrice.amount;
    }
    else {
        bookPrice = 'N/A';
    }
    return bookPrice;
}

function getImage(book) {
    
    let image = '';
    if (book.volumeInfo.imageLinks.thumbnail) {
        image = book.volumeInfo.imageLinks.thumbnail;
    }
    else {
        image = 'No Image';
    }
    return image;
}

function Book (props) {

    // some function
    // if property does NOT exist
    //      check if another size/value/etc exists
    //      and set it to that value
    return (
        <div className='book-div' onClick={(event) => props.divClick(props.book.id)}>
            {/* {console.log(props.book.volumeInfo.title)} */}
            <h2>{props.book.volumeInfo.title}</h2>
            {/* Will give authors array */}
            <p className='author'>{props.book.volumeInfo.authors} </p> 
            {/* Some books don't have a sale price. 
                If no sale price, print FREE instead*/}
            <p className='price'>{getPrice(props.book)} </p>
            <p className={'description'+ (props.hidden ? ' hidden' : '')}>{props.book.volumeInfo.description}</p>
            <img src={getImage(props.book)} alt={props.book.title}></img>
            
            
        </div>
    );
}

export default Book;