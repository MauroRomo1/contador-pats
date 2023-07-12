import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

import Titulos from "./components/Titulos";
import Contador from "./components/Contador";

function App() {
  const estado = true;
  return (
    <Container>
      <Titulos
        subtitulo="Este subtitulo fue creado con props"
        estado={estado}
      />
      <Contador />
    </Container>
  );
}

export default App;
