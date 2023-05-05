import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RandomChallenge() {
  return (
    

   
    <div className='outline1'>
    <div className='title'>RandomChallenge</div>
  
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Form.Select className='randompageinput'>
          <option>Choose a language</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <br />
      <div>
        <Form.Select className='randompageinput2'>
          <option>Reserve Kata</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </div>
  

  </div>
  


   
  )
}
