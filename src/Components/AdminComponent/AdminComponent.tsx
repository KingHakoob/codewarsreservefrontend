import logout from '../../Assets/log-out.png';
import '../AdminComponent/AdminComponent.css';
import { Container, Row, Card, Col, Form, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import search from '../../Assets/Search.png';
import logo from '../../Assets/codewarsres-logo.png';
import copyright from '../../Assets/copyright.png'
import { useNavigate } from 'react-router-dom';
import UserCardComponent from '../UserCardComponent/UserCardComponent';


function AdminComponent() {
    let Navigate = useNavigate();
    let userData;
    let userTemp = JSON.parse(sessionStorage.UserData);
    if (userTemp.username == null) {
        userData = {
            ranks: { overall: { name: '1 Kyu' } },
            username: 'BobTheBuilder',
            name: 'Bob',
            honor: '5000',
            clan: 'Builders',
            leaderBoardPosition: '1',
            codeWarsChallenges: { totalCompleted: 1000, totalAuthored: 50 }
        }
    } else {
        userData = JSON.parse(sessionStorage.UserData);

    }
    console.log(userData);
    return (
        <div>
            <Navbar className='nav-bg'>
                <Container className='nav-container'>
                    <div>
                        <img className='logo-img' src={logo} />
                        <p className='logo-title'>CodeReserve</p>
                    </div>
                    <div className='log-out'>
                        <p className='log-out-btn' onClick={() => Navigate('/')}><img src={logout} />Log Out</p>
                    </div>
                </Container>
            </Navbar>



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
                                    <p className='tag'>Clan: </p>
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
            <div className='filterUserDiv'>
            <Container className='filters-container-admin'>
                <Card className='filters-admin'>
                    <p className='filters-title-admin'> Filters</p>
                    <Container className='filter-input-container-admin'>
                        <Form.Control className='filter-input-admin'></Form.Control>
                        <img className='filter-image-admin' src={search} />
                    </Container>
                    <p className='sort-title-admin'>Sort By</p>
                    <DropdownButton className='dropdown-bg-admin' id="dropdown-basic-button" title="Alphabetically">
                        <Dropdown.Item href="#/action-1">A to Z</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Z to A</Dropdown.Item>
                    </DropdownButton>

                </Card>

            </Container>
            <UserCardComponent />
            </div>
            <Row className='footer-box'>
                <Container className='nav-container'>
                    <div className='cr-tag'>
                        <img src={copyright} />
                        <p >2023 CodeStack Academy Day Class</p>
                    </div>
                </Container>
            </Row>
        </div>
    )
}

export default AdminComponent