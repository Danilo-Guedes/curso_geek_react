import { actionsTypes } from '../constants/frutas';

const actions = {
    adicionar: fruta => ({
        type: actionsTypes.ADICIONAR_FRUTA ,
        payload: fruta,
    }),
    remover: fruta => ({
        type: actionsTypes.REMOVER_FRUTAS ,
        payload: fruta,
    }),
};

export { actions };