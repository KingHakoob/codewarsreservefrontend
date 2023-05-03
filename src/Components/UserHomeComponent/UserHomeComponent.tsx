import React from 'react'
import logout from '../../Assets/log-out.png';
import '../UserHomeComponent/UserHomeComponent.css'
import { Container, Row } from 'react-bootstrap';


function UserHomeComponent() {
    return (
        <div>
            <div className='log-out'>
                <p className='log-out-btn'><img src={logout} />Log Out</p>
            </div>
            <Container className='user-header-box  '>
                <Row >
                    <div className='header-title col-2'>
                        <p className='rectangle kata-rank'>4 Kyu</p>
                    </div>
                    <div className='col-4'>
                        <p className='username'>UserNameGoesHere </p>
                    </div>
                </Row>
                <Row className='user-info'>
                    <div className='col-3'>
                        <p>Name: Brandon Lee</p>
                        <p>Honor: 200 </p>
                    </div>
                    <div className='col-3'>
                        <p>Clane: Codestack Academy</p>
                        <p>Leaderboard Position: #320,230 </p>
                    </div>
                    <div className='col-3'>
                        <p>Total Completed Kata: 80</p>
                        <p>Total Authored Kata: 2 </p>
                    </div>


                </Row>
            </Container>
        </div>
    )
}

export default UserHomeComponent