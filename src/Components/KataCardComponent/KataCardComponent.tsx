import { Container, Row, Col } from "react-bootstrap";
import './KataCardComponent.css';

export default function KataCardComponent() {
    return (
        <Container className="kataCardComponent">
            <Row className="topRow">
                <Col sm={2}>
                    <h1 className="kataRank">6 Kyu</h1>
                </Col>
                <Col>
                    <h1 className="kataName">Griffin's Marble Bonanza</h1>
                    <h1 className="kataAuthor">GriffinSwain</h1>
                    <button className="reserveBtn">Reserve Kata</button>
                </Col>
                <Col className="iconCol">
                    <div className="iconGroup">
                        <div className="iconSpacing">
                            <i className="fa-brands fa-square-js langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-brands fa-python langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                    </div>
                    <div className="iconGroup">
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                        <div className="iconSpacing">
                            <i className="fa-solid fa-square langIcon"></i>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="bottomRow">
                <Col>
                    <h1 className="descriptionTitle">Kata Description</h1>
                    <h1 className="kataDescription">Griffin has lost his marbles! They are mixed in with his friends marbles, but luckily they are marked with his initials. Help him find out if he has recovered them all!</h1>
                </Col>
            </Row>
        </Container>
    );
}