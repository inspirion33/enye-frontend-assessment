import React from 'react';

const SearchBox = ({ searchfield, searchChange, filterOnSearch }) => {
    return (
        <div className='pa2'>
        <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Users Transaction'
            onChange={filterOnSearch}
        />
        <button onClick={filterOnSearch}></button>
        </div>
    );
}

export default SearchBox;