import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const Cards = () => {
  return (
    <Row className="g-4 mt-4">
      {fantasy.map((books) => {
        return (
          <Col xs={12} md={4} key={books.asin}>
            <Card className="cover d-flex flex-column">
              <Card.Img variant="top" src={books.img} />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>Category: {books.category}</Card.Text>
                <Card.Text>Price: {books.price}€</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default Cards;
