import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import Cards from "./components/Cards";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import Search from "./components/Search";

function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <Welcome />
        <Search />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
