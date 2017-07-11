import * as listService from '../services/gift.services';
import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE,
  GIFT_ADD,
  GIFT_EDIT,
  GIFT_REMOVE,
  BUDGET_SAVE
} from './types';

// Firebase e' l'unica fonte di verita': i thunk scrivono sul database e poi
// aggiornano lo stato Redux con il risultato confermato.
export const loadList = listId => dispatch => {
  dispatch({ type: LIST_LOAD_REQUEST });
  return Promise.all([listService.getList(listId), listService.getGifts(listId)])
    .then(results => {
      const list = results[0];
      const gifts = results[1];
      dispatch({
        type: LIST_LOAD_SUCCESS,
        listId,
        budget: list ? list.budget : 0,
        gifts
      });
    })
    .catch(error => {
      dispatch({
        type: LIST_LOAD_FAILURE,
        error: error.message || 'Errore nel caricamento della lista'
      });
    });
};

export const addGift = (listId, gift) => dispatch =>
  listService.addGift(listId, gift).then(saved => {
    dispatch({ type: GIFT_ADD, gift: saved });
    return saved;
  });

export const editGift = (listId, id, gift) => dispatch =>
  listService.updateGift(listId, id, gift).then(() => {
    dispatch({ type: GIFT_EDIT, id, gift });
  });

export const removeGift = (listId, id) => dispatch =>
  listService.deleteGift(listId, id).then(() => {
    dispatch({ type: GIFT_REMOVE, id });
  });

export const saveBudget = (listId, budget) => dispatch =>
  listService.setBudget(listId, budget).then(() => {
    dispatch({ type: BUDGET_SAVE, budget });
  });
