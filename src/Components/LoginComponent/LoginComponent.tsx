import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        let userData: object = {
            username,
            password
        }
        console.log(userData);
        //let token = await {function name}(userData);
        // if(token.token != null){
        //     localStorage.setItem("Token", token.token);
        //     console.log('Success');
        // }
    }

    return (
        <div>
            <h1>Adult Login</h1>
            <input type='text' placeholder='Enter Email' onChange={({target: { value }}) => setUsername(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}