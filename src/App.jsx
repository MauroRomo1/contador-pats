import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Titulos from "./components/Titulos";
import Contador from "./components/Contador";

import catPat from "./assets/cat-pat.gif";

function App() {
  return (
    <Container>
      <Titulos titulo="Contador de pats al gato" />
      <img src={catPat} alt="" className="mx-auto d-block" />
      <Contador />
    </Container>
  );
}

export default App;
