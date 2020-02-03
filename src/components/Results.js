import React from 'react';
import Book from './Book';

function Results (props) {
    return (
        <div className='results-div'>
            {props.state.items.map( (results, index) =>  {
                return <Book key={index} state={results.state}/>
            })}
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