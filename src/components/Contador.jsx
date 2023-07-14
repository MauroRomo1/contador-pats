import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const sumarContador = () => {
    setNumero(numero + 1);
  };

  const restarContador = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <section className="text-center mt-3">
      <h3>Contador de caricias</h3>
      <h3>{numero}</h3>
      <div className="d-flex justify-content-center gap-2">
        <Button
          className="btn-contador"
          variant="primary"
          onClick={() => restarContador()}
        >
          -1
        </Button>
        <Button
          className="btn-contador"
          variant="primary"
          onClick={() => sumarContador()}
        >
          +1
        </Button>
      </div>
    </section>
  );
};

export default Contador;
