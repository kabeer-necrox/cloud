
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
function Companies(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='cardText'>
        {/* <Card.Title>100%</Card.Title> */}
        <Card.Text>
          <h4>{props.compony}</h4>
        </Card.Text>
        <p>this is just for testing purpose you don't need to focous on the text</p>
      </Card.Body>
    </Card>
  )
}

export default Companies