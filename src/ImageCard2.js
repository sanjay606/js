import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImageCard2({title,imgsrc,desc}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img className ="imagewithme" variant="top" src={imgsrc} />
    <Card.Body  >
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {desc}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default ImageCard2