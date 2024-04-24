import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";

import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
