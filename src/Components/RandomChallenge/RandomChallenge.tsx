import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RandomChallenge() {
  return (
    

   
    <div className='outline1'>
    <div className='title'>RandomChallenge</div>
  
    <div className='nnn'>

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
    <div>
    

        <div className='nn'>
          <div className='Randomly1'>
          Randomly Chosen Kata
        </div>
        <div className='Randomly2'>AuthorOfThisKata</div>
        <div className='RandomlyChosenKata1'>Kata Description</div>
        <div className='RandomlyChosenKata1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.</div>
    </div> 
     </div>
 </div>
  


   
  )
}
