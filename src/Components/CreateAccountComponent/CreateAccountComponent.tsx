import React, { useState } from 'react';

export default function AdultCreateAccount(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        if (!username || !password) {
            alert("Count not create account");
          } else {
            let userData: object = {
              id: 0,
              username,
              password
            }
            // if (await {function name}userData)) {
            //   console.log('Success');
            //   navigate("/{home component}");
            // } else {
            //   alert("Count not create account");
            // }
        }
    }

    return (
        <div>
            <h1>Create Adult Account</h1>
            <input type='text' placeholder='Enter Email' onChange={({target: { value }}) => setUsername(value)}/>
            <input type='password' placeholder='Enter Password' onChange={({target: { value }}) => setPassword(value)}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}