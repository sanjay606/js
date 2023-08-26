import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ImageCard2({title,imgsrc,desc}) {
  const [Count,SetCount] = useState(0);
  const HandleClick=()=>{
    
    SetCount(Count+1);
    console.log('button clicked',Count);
  }
 
  const SandleClick=()=>{
    if(Count>0)
    SetCount(Count-1);
    console.log('button clicked',Count);
    
  }

  return (
    <Card className='bo' style={{ width: '18rem' }}>
    <Card.Img className ="imagewithme" variant="top" src={imgsrc} />
    <Card.Body  >
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {desc}
      </Card.Text>
      <Button onClick={HandleClick} variant="primary">+</Button> 
      <Button className='subs' onClick={SandleClick} variant="primary">-</Button>{Count}
      
    </Card.Body>
  </Card>
  )
}

export default ImageCard2