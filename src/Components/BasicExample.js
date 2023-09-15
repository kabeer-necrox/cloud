import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className='cardText'>
        <Card.Title> <h1>{props.name}</h1></Card.Title>
        <Card.Text>
         <h3> {props.data}</h3> 
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;