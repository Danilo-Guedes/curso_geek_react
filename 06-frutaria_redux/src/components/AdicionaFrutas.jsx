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

    //limpando os dois inputs
    document.querySelector(".frutaInput").value = "";
    document.querySelector(".qtdeInput").value = "";
    // dando select no primeiro input
    document.querySelector(".frutaInput").select();
  };

  return (
    <form onSubmit={adicionarFrutas}>
      <input
        type="text"
        className="frutaInput"
        required
        onChange={(event) => setNome(event.target.value)}
        placeholder="Adicione uma Fruta"
      />

      <input
        type="number"
        className="qtdeInput"
        required
        onChange={(event) => setQuantidade(event.target.value)}
        placeholder="Adicione uma Quantidade"
      />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AdicionaFrutas;
