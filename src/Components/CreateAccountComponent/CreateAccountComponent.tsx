import { useState } from "react";
import { CreateAccountPost, GetCodeWarsUserData } from "../../Services/DataService";
import { Container, Row, Button, Card, Form } from "react-bootstrap";
import Logo from "../../Assets/codewarsres-logo.png";
import "./CreateAccountComponent.css";
import { useNavigate } from "react-router-dom";

export default function CreateAccountComponent() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      alert('Passwords Do Not Match')
    } else {
      if (!username || !password || !passwordConfirm) {
        alert("Count not create account");
      } else {
        let userData: object = {
          id: 0,
          username,
          isAdmin,
          password,
        };
        if (await CreateAccountPost(userData)) {
          sessionStorage.setItem('UserData', JSON.stringify(await GetCodeWarsUserData(username)));
            navigate('/UserHomeComponent');
        } else {
          alert("Count not create account");
        }
        console.log(userData);
      }
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="createAccountBody">
              <img src={Logo} className="createAccountLogo" alt="Code Wars Reserve Logo" />

              <Card.Title className="createAccountCardHeaderText">
                CodeReserve
              </Card.Title>

              <Form className="createAccountFormControl">

                <Container>
                  <Form.Group className="formControl" controlId="formBasicEmail" >
                    <i className="fa-solid fa-user"></i>

                    <Form.Control
                      className="createAccountForm"
                      type="text"
                      placeholder=" CodeWars Username"
                      onChange={({ target: { value } }) => setUsername(value)}
                    />
                  </Form.Group>
                </Container>

                <Container>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Container>
                      <i className="fa-solid fa-lock"></i>
                    </Container>
                    <Form.Control
                      className="createAccountForm2"
                      type="password"
                      placeholder=" Password"
                      onChange={({ target: { value } }) => setPassword(value)}
                    />
                  </Form.Group>
                </Container>

                <Container>
                  <Form.Group className="mb-3" controlId="formBasicConfirmPassword" >
                    <Container>
                      <i className="fa-solid fa-lock"></i>
                    </Container>
                    <Form.Control
                      className="createAccountForm3"
                      type="password"
                      placeholder=" Confirm Password"
                      onChange={({ target: { value } }) => setPasswordConfirm(value)}
                    />
                  </Form.Group>
                </Container>

              </Form>
              <>
                <input
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                  onChange={() => setIsAdmin(!isAdmin)}
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                >
                  <span className={`react-switch-button`} />
                </label>
              </>

              <p className="createAccountCardSmTxt"> Admin Account </p>

              <Button onClick={handleSubmit} className="createAccountButton" type="submit">
                Sign Up
              </Button>

              <p onClick={() => navigate('/')} className="createAccountCardSmTxt2"><span>Login</span> if you already have an account</p>

            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
