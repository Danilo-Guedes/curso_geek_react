import React from "react";
import { useSelector } from "react-redux";
import AdicionaFrutas from "./AdicionaFrutas";
import Fruta from "./Fruta";

const ListaFrutas = () => {
  const frutas = useSelector((state) => state.frutasReducer.frutas);

  return (
    <div>
      <h1>Lista de Frutas</h1>

      <AdicionaFrutas />

      {frutas.map((fruta) => {
        return <Fruta key={fruta.id} fruta={fruta} />;
      })}
    </div>
  );
};

export default ListaFrutas;
