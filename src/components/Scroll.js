import React from 'react';

const Scroll = (props)=>{
    return(
        <div style={{overflowY:'scroll', border:'.25rem solid black', height:'50rem'}}>
			{props.children}
		</div>
    );
}


export default Scroll;