import React from 'react'
import logout from '../../Assets/log-out.png';
import '../UserHomeComponent/UserHomeComponent.css'
import { Container, Row, Card, Col, Form } from 'react-bootstrap';


function UserHomeComponent() {
    let userData = JSON.parse(sessionStorage.UserData);
    return (
        <div>
            <div className='log-out'>
                <p className='log-out-btn'><img src={logout} />Log Out</p>
            </div>


            <Container className='d-flex justify-content-center'>
                <Card className='user-header-box  '>
                    <Card.Body>
                        <Row >

                            <div className='header-title col-2'>
                                <p className='rectangle kata-rank'>{userData.ranks.overall.name}</p>
                            </div>
                            <div className='col-4'>
                                <p className='username'>{userData.username}</p>
                            </div>
                        </Row>
                        <Row className='user-info'>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Name: </p>
                                    <p className='user-info-input'>{userData.name}</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Honor: </p>
                                    <p className='user-info-input'>{userData.honor}</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Clane: </p>
                                    <p className='user-info-input'>{userData.clan}</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Leaderboard Position:</p>
                                    <p className='user-info-input'>#{userData.leaderboardPosition}</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Total Completed Kata: </p>
                                    <p className='user-info-input'>{userData.codeChallenges.totalCompleted}</p>
                                </div>
                                <div className='user-data gap-2'>
                                    <p className='tag'>Total Authored Kata: </p>
                                    <p className='user-info-input'>{userData.codeChallenges.totalAuthored}</p>
                                </div>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>


            </Container>
            <Container className='categories-container'>
                <Row>
                    <Col className='categories'>
                        <p>Kata</p>
                        <p>Completed</p>
                        <p>Unfinished</p>
                        <p>Authored</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Card className='filters'>
                    <p className='filters-title'> Filters</p>
                    <Form.Control />
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default UserHomeComponent