import { Accordion } from "react-bootstrap";

export default function UserCardComponent() {
    return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>5 Kyu Freddy</Accordion.Header>
        <Accordion.Body>
          <p>Honor: 200</p>
          <p>Leaderboard Position: #365,751</p>
          <p>Katas Completed: 12</p>
          <p>Katas Authored: 2</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>1 Kyu BobTheBuilder</Accordion.Header>
        <Accordion.Body>
          <p>Honor: 5000</p>
          <p>Leaderboard Position: #1</p>
          <p>Katas Completed: 500</p>
          <p>Katas Authored: 50</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
}