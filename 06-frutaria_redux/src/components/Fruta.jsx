import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.actions";

const Fruta = ({ fruta }) => {
  // descontruiu o props.fruta ao invés de usar o props
  const dispatch = useDispatch();

  return (
    <div className="fruta">
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.nome}
        </li>
        <li>
          <strong>Quantidade: </strong> {fruta.quantidade}
        </li>
      </ul>
      <button onClick={() => dispatch(actions.remover(fruta))}>
        Remover Fruta
      </button>
    </div>
  );
};

export default Fruta;
