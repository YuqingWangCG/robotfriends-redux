import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
    // throw new Error('errrorr')

    return( 
        <div>
            {
            robots.map(robot=>{
                return (
                    <Card 
                        key={robot.name}
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email}/>
                )
            })
            }
        </div> 
    );
}


export default CardList;