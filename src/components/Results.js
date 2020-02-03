import React from '.react';
import Book from './Book';

function Results (props) {
    return (
        <div className='results-div'>
            <Book state={props.state} />
        </div>
    )

    // <div className='App-list'>
    //       {store.lists.map(list => (
    //         <List
    //           key={list.id}
    //           id={list.id}
    //           header={list.header}
    //           cards={list.cardIds.map(id => store.allCards[id])}
    //           addRandomCard={this.handleAddRandomCard}
    //           deleteCard={this.handleDeletedCard}
    //         />
    //       ))}
}

export default Results;