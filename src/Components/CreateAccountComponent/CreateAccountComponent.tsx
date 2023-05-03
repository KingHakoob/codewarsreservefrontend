import React, { useState } from 'react';
import { CreateAccountPost } from '../../Services/DataService';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './CreateAccountComponent.css';

export default function CreateAccountComponent() {
    const [username, setUsername] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("Count not create account");
        } else {
            let userData: object = {
                id: 0,
                username,
                isAdmin,
                password
            }
            if (await CreateAccountPost(userData)) {
              console.log('Success');
            //   navigate("/{home component}");
            } else {
              alert("Count not create account");
            }
            console.log(userData);
        }
    }

    return (
   <div>
    <Container>
        <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='createAccountBody'>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Row>
    </Container>


   </div>
    )
}




// {/* <div>
// <h1>Create Account</h1>
// <input type='text' placeholder='Enter Username' onChange={({ target: { value } }) => setUsername(value)} />
// <div className='d-flex'>
//     <p>Admin Account</p>
//     <input type='checkbox' onClick={() => setIsAdmin(!isAdmin)} />
// </div>
// <input type='password' placeholder='Enter Password' onChange={({ target: { value } }) => setPassword(value)} />
// <button onClick={handleSubmit}>Login</button>
// </div>  */}