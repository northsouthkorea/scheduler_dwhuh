import { fromJS, Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

import * as MENU_STRUCTURES from '../../static/CONSTANTS/routeStructures';

const initialState = Map({
  menu: Map({
    list: fromJS(MENU_STRUCTURES),
    activatedMain: '',
    activatedSub: '',
  }),
});

const SET_ACTIVATED_MAIN = 'common/SET_ACTIVATED_MAIN';
const SET_ACTIVATED_SUB = 'common/SET_ACTIVATED_SUB';

export const setActivatedMain = createAction(SET_ACTIVATED_MAIN);
export const setActivatedSub = createAction(SET_ACTIVATED_SUB);

export default handleActions({
  [SET_ACTIVATED_MAIN]: state => state,
  [SET_ACTIVATED_SUB]: state => state,
}, initialState);
