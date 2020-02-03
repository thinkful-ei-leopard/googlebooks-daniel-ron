import React from 'react';

function Book (props) {
    return (
        <div className='book-div'>
            <h2>{props.state.items.volumeInfo.title}</h2>
            {/* Will give authors array */}
            <p className='author'>{props.state.items.volumeInfo.authors} </p> 
            {/*unsure what price is, FIND IT */}
            <p className='price'>{props.state.items.retailPrice.amount} </p>
            <p className='description'>{props.state.items.description}</p>
            <img src={props.state.items.imageLinks.small} alt={props.state.items.title}></img>
        </div>
    );
}

export default Book;