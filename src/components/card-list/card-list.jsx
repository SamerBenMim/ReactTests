import React from 'react'
import Card from '../card/card'
import './card-list.css'
export default function CardList(props) {
    return (
        <div className='card-list'>
          {props.monsters.map(m => { return <Card key={m.id}   monster={m}>{m.name}</Card>})}    
        </div>
    )
}
