import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.actions";

const AdicionaFrutas = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const dispatch = useDispatch();

  const adicionarFrutas = (event) => {
    event.preventDefault();

    const fruta = {
      id: new Date(),
      nome,
      quantidade,
    };
    dispatch(actions.adicionar(fruta));
  };

  return (
    <form onSubmit={adicionarFrutas}>
      <input
        type="text"
        required
        onChange={(event) => setNome(event.target.value)}
        placeholder="Adicione uma Fruta"
      />

      <input
        type="number"
        required
        onChange={(event) => setQuantidade(event.target.value)}
        placeholder="Adicione uma Quantidade"
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionaFrutas;
