import {
  LIST_LOAD_REQUEST,
  LIST_LOAD_SUCCESS,
  LIST_LOAD_FAILURE,
  GIFT_ADD,
  GIFT_EDIT,
  GIFT_REMOVE,
  BUDGET_SAVE
} from '../actions/types';

const initialState = {
  listId: null,
  gifts: [],
  budget: 0,
  status: 'idle',
  error: null
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case LIST_LOAD_REQUEST:
      return { ...state, status: 'loading', error: null };
    case LIST_LOAD_SUCCESS:
      return {
        ...state,
        status: 'ready',
        listId: action.listId,
        budget: action.budget,
        gifts: action.gifts
      };
    case LIST_LOAD_FAILURE:
      return { ...state, status: 'error', error: action.error };
    case GIFT_ADD:
      return { ...state, gifts: [...state.gifts, action.gift] };
    case GIFT_EDIT:
      return {
        ...state,
        gifts: state.gifts.map(g =>
          g.id === action.id ? { ...g, gift: action.gift } : g
        )
      };
    case GIFT_REMOVE:
      return {
        ...state,
        gifts: state.gifts.filter(g => g.id !== action.id)
      };
    case BUDGET_SAVE:
      return { ...state, budget: action.budget };
    default:
      return state;
  }
};

export default lists;
