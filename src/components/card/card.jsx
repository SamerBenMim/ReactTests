import React from 'react'
import './card.css'
export default function card(props) {
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

