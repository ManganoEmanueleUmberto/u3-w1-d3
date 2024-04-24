import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col xs={12} md={4} key={props.book.asin}>
      <Card className="cover d-flex flex-column">
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Category: {props.book.category}</Card.Text>
          <Card.Text>Price: {props.book.price}€</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
