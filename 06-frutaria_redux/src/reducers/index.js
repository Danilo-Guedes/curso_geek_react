import { combineReducers } from 'redux';

import { reducers as frutasReducer } from './frutas.reducer';
// import { reducers as vegetaisReducer } from './vegetais.reducer';

const reducers = combineReducers({
    frutasReducer,
    // vegetaisReducer e etc... 
});

export { reducers };