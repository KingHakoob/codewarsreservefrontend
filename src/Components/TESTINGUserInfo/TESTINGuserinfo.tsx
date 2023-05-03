import { Container, Row, Col } from "react-bootstrap";
import './TESTINGUserInfo.css';

export default function TESTINGUserInfo() {
    let userData = JSON.parse(sessionStorage.UserData);

    return (
        <Container>
            <Row>
                <Col className="userDataTopRow">
                    <h1>{userData.ranks.overall.name}</h1>
                    <h1>{userData.username}</h1>
                </Col>
            </Row>
            <Row className="userDataBottomRow">
                <Col className="">
                    <p>Name: {userData.name}</p>
                    <p>Honor: {userData.honor}</p>
                </Col>
                <Col className="">
                    <p>Clan: {userData.clan}</p>
                    <p>Leaderboard: {userData.leaderboardPosition}</p>
                </Col><Col className="">
                    <p>Total Completed Kata: {userData.codeChallenges.totalCompleted}</p>
                    <p>Total Authored Kata: {userData.codeChallenges.totalAuthored}</p>
                </Col>
            </Row>
        </Container>
    );
}