import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    filter: "",
  };

  render() {
    if (this.state.filter) {
      const filtered = this.props.books.includes(this.state.filter);
      return (
        <Row className="g-4 mt-4">
          {filtered.map((books) => {
            return <SingleBook book={books} />;
          })}
        </Row>
      );
    } else {
      return (
        <Row className="g-4 mt-4">
          {this.props.books.map((books) => {
            return <SingleBook book={books} />;
          })}
        </Row>
      );
    }
  }
}

export default BookList;
