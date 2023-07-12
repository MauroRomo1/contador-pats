const Titulos = ({ subtitulo, estado }) => {
  return (
    <section className="text-center">
      <h1 className="display-4">Proyecto contador con react</h1>
      <h2 className="display-6">
        {subtitulo}, estado: {estado ? "habilitado" : "deshabilitado"}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;
