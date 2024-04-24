import { Component } from "react";
import { Form } from "react-bootstrap";
import BookList from "./BookList";

class Search extends Component {
  state = {
    filter: "",
  };
  handleFieldChange = (propertyValue) => {
    this.setState({ filter: propertyValue });
  };
  handleSubmit = (e) => {
    // in React è ancora più importante evitare il refresh della pagina!
    e.preventDefault();

    <BookList filter={this.state.filter} />;
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="FormSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search a book's name"
            onChange={
              // e => this.setState({ reservation: { ...this.state.reservation, name: e.target.value } })
              (e) => this.handleFieldChange(e.target.value)
            }
            value={this.state.filter}
            required
          />
        </Form.Group>
      </Form>
    );
  }
}

export default Search;
