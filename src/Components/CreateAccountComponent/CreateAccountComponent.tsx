import React, { useState } from 'react';
import { CreateAccountPost } from '../../Services/DataService';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import Logo from '../../Assets/codewarsres-logo.png';
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
        <Card.Img src='../../Assets/codewarsres-logo.png'></Card.Img>
        <Card.Title className='createAccountCardHeaderText'>CodeReserve</Card.Title>

        <Form className='createAccountFormControl'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='createAccountForm' type="text" placeholder="CodeWars Login" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='createAccountForm2' type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='createAccountForm3' type="password" placeholder="Confirm Password" />
      </Form.Group>
    </Form>

    <Button className='createAccountButton' type="submit">
        Sign Up
      </Button>

      <p className='createAccountCardSmTxt'> Admin Account </p>
      <p className='createAccountCardSmTxt2'> Login if you already have an account </p>
      </Card.Body>
    </Card>
        </Row>
    </Container>


   </div>
    )
}
