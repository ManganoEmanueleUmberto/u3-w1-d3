import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    filter: "",
  };
  handleFieldChange = (propertyValue) => {
    this.setState({ filter: propertyValue });
  };

  render() {
    console.log(this.state.filter);
    if (this.state.filter !== "") {
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="FormSearch">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search a book's name"
                onChange={(e) => this.handleFieldChange(e.target.value)}
                value={this.state.filter}
              />
            </Form.Group>
          </Form>
          <Row className="g-4 mt-4">
            {this.props.books
              .filter((book) => book.title.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
              .map((book) => (
                <SingleBook book={book} />
              ))}
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="FormSearch">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search a book's name"
                onChange={(e) => this.handleFieldChange(e.target.value)}
                value={this.state.filter}
              />
            </Form.Group>
          </Form>
          <Row className="g-4 mt-4">
            {this.props.books.map((books) => {
              return <SingleBook book={books} />;
            })}
          </Row>
        </>
      );
    }
  }
}

export default BookList;
