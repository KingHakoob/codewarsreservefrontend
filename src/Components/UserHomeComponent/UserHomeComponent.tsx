import logout from '../../Assets/log-out.png';
import '../UserHomeComponent/UserHomeComponent.css';
import { Container, Row, Card, Col, Form, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import search from '../../Assets/Search.png';
import logo from '../../Assets/codewarsres-logo.png';
import copyright from '../../Assets/copyright.png'
import KataCardComponent from '../KataCardComponent/KataCardComponent';
import { useNavigate } from 'react-router-dom';

function UserHomeComponent() {
    let Navigate = useNavigate();
    let userData;
    let userTemp = JSON.parse(sessionStorage.UserData);

    let nameTest = 'testing';
    let KataDummyData = [ 
        {name: "Count to Five", authorName: "Freddy", kataDescription: "Count to Five with one hand!"},
        {name: "Reverse The String", authorName: "BobTheBuilder", kataDescription: "Reverse The Given String"}
    ];

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
    return (
        <div>
            <Navbar className='nav-bg'>
                <Container className='nav-container'>
                    <div>
                        <img className='logo-img' src={logo} />
                        <p className='logo-title'>CodeReserve</p>
                    </div>
                    <div className='log-out'>
                        <p className='log-out-btn' onClick={() => Navigate('/')}><img src={logout}/>Log Out</p>
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
            <Container>
                <Row className='filterKataRow'>
                    <Col>
                        <Container className='filters-container'>
                            <Card className='filters'>
                                <p className='filters-title'> Filters</p>
                                <Container className='filter-input-container'>
                                    <Form.Control className='filter-input'></Form.Control>
                                    <img className='filter-image' src={search} />
                                </Container>
                                <p className='sort-title'>Sort By</p>
                                <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Alphabetically">
                                    <Dropdown.Item href="#/action-1">A to Z</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Z to A</Dropdown.Item>
                                </DropdownButton>

                                <p className='sort-title'>Languages</p>
                                <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Choose a Language">
                                    <Dropdown.Item href="#/action-1">C#</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">JavaScript</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Phython</Dropdown.Item>
                                </DropdownButton>

                                <p className='sort-title'>Difficulty</p>
                                <DropdownButton className='dropdown-bg' id="dropdown-basic-button" title="Select">
                                    <Dropdown.Item href="#/action-1">8 Kyu</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">7 Kyu</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">6 Kyu</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">5 Kyu</Dropdown.Item>
                                </DropdownButton>
                            </Card>

                        </Container>
                    </Col>
                    <Col>
                        <KataCardComponent kataData={KataDummyData[0]} />
                        <KataCardComponent kataData={KataDummyData[1]} />
                    </Col>
                </Row>
            </Container>
            <Row className='footer-box'>
            <Container className='nav-container'>
                <div className='cr-tag'>
                <img src={copyright}/>
                <p >2023 CodeStack Academy Day Class</p>
                </div>
            </Container>
            </Row>
        </div>
    )
}

export default UserHomeComponent