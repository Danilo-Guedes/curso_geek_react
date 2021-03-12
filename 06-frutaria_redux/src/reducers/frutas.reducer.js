import { actionsTypes } from "../constants/frutas";

const INITAL_STATE = {
  frutas: [],
};

const reducers = (state = INITAL_STATE, action) => {
  //Reducers sempre devem retornar um novo estado
  switch (action.type) {
    case actionsTypes.ADICIONAR_FRUTA:
      return { frutas: [...state.frutas, { ...action.payload }] };
    case actionsTypes.REMOVER_FRUTAS:
      return { frutas: state.frutas.filter((x) => x.id !== action.payload.id) };
    default:
      return state;
  }
};

export { reducers };
