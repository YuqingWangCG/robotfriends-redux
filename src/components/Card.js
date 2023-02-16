import React from 'react';

const Card = ({id, name, email})=>{
    return(
        <div className='ba b--black-7 bw2 br4 bg-white tc pa4 grow shadow-5 dib ma3'>
			<img alt='' src= {`https://robohash.org/${id}`} className="br-100 h5 w5 bg-light-blue shadow-3 ba b--black-05"/>
			<h2>{name}</h2>
			<p>{email}</p>
            
		</div>
    );
}


export default Card;