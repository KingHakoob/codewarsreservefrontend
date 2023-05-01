import React, { useState } from 'react';
import { GetCodeWarsKata } from '../../Services/DataService';

export default function TestGetCodeWarsKata() {
    const [input, setInput] = useState<string>('');

    const handleSubmit = async () => {
        console.log(await GetCodeWarsKata(input));
    }

    return (
        <div>
            <h1>Get Kata: Search By Id or S:ug</h1>
            <input type='text' placeholder='Search Here' onChange={({target: { value }}) => setInput(value)}/>
            <button onClick={handleSubmit}>Get Kata</button>
        </div>
    )
}