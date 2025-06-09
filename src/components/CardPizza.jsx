import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardPizza = (props) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>Pizza {props.name}</Card.Title>
        <Card.Body style={{border: "0.05px dashed gray"}}>
          <Card.Text style={{fontSize: '14px', textAlign: 'center'}}>Ingredientes:</Card.Text>
          <Card.Text style={{fontSize: '12px', textAlign: 'center'}}>{props.ingredientes + ', '}
          </Card.Text>
        </Card.Body>
        <Card.Text style={{fontSize: '20px', textAlign: 'center'}}>
          Precio: ${props.price}
        </Card.Text>
        <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="light" size="sm" style={{border: "0.05px solid gray"}} >Ver más</Button>
          <Button variant="dark" size="sm">Añadir</Button>
      </Card.Body>
      </Card.Body>
    </Card>
  )
}

export default CardPizza