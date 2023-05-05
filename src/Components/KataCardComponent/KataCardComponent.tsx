import { Container, Row, Col } from "react-bootstrap";
import './KataCardComponent.css';

export default function KataCardComponent(props: any) {
    return (
        <Container className="kataCardComponent">
            <Row className="topRow">
                <Col sm={2}>
                    <h1 className="kataRank">6 Kyu</h1>
                </Col>
                <Col>
                    <h1 className="kataName">{props.kataData.name}</h1>
                    <h1 className="kataAuthor">{props.kataData.authorName}</h1>
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
                    <h1 className="kataDescription">{props.kataData.kataDescription}</h1>
                </Col>
            </Row>
        </Container>
    );
}