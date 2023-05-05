import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { LoginPost, GetCodeWarsUserData } from '../../Services/DataService';
import img from '../../Assets/codewarsres-logo.png'
import { useNavigate } from 'react-router-dom';
export default function LoginComponent() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const userData = {
            username,
            password
        };
        console.log(userData);
        const token = await LoginPost(userData);
        if (token?.token != null) {
            localStorage.setItem('Token', token.token);
            sessionStorage.setItem('UserData', JSON.stringify(await GetCodeWarsUserData(username)));
            navigate('/UserHomeComponent');
        }
    };

    return (
        <Container className="background">
            <div className="background1">
                <div className="bg2">
                    <div className="parent">

                        <img src={img} alt="" className='imgwidth' />

                    </div>
                    <div className="logoheader">CodeReserve</div>
                    <div className="parent">
                        <div className="form1">


                            <div className="input-container">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    className="input1"
                                    type="text"
                                    placeholder="          Username"
                                    onChange={({ target: { value } }) => setUsername(value)}
                                />
                            </div>
                            <div className="input-container">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    className="input2"
                                    type="password"
                                    placeholder="          Password"
                                    onChange={({ target: { value } }) => setPassword(value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="parent">
                            <button className="loginbtn" onClick={handleSubmit}>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>

                            <p className="text1"> <span onClick={() => navigate('/CreateAccountComponent')} className="textbtn"><u>sign up</u> </span>if you don't have an account yet?</p>
                        </div>


                    </div>
                </div>
            </div>
        </Container>
    );
}
