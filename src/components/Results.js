import React from 'react';
import Book from './Book';

function Results (props) {
    return (
        <div className='results-div'>
            {/* {console.log(props)} */}
            {props.state.items.map( (item, index) =>  {
                console.log(item.id === props.state.selectedId);
                return <Book index={index} hidden={item.id !== props.state.selectedId} divClick={props.divClick} key={index} book={props.state.items[index]}/>
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