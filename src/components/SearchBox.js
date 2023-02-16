import React from 'react';


const SearchBox = ({searchContent})=>{
    

    return( 
        <div className='pa2'>
            <input 
                className='pa2 ba b--blue bg-lightest-blue'
                type='search' 
                placeholder='start searching:'
                onChange={searchContent}
            />
        </div> 
    );
}


export default SearchBox;