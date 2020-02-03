import React from 'react';
import Book from './Book';

function Results (props) {
    return (
        <div className='results-div'>
            {/* {console.log(props)} */}
            {props.state.items.map( (item, index) =>  {
                return <Book index={index} key={index} state={props.state.items[index]}/>
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