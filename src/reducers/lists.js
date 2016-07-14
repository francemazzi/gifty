import {
  GIFTS_LOADED,
  GIFT_ADD,
  GIFT_EDIT,
  GIFT_REMOVE
} from '../actions/types';

const initialState = { gifts: [] };

const lists = (state = initialState, action) => {
  switch (action.type) {
    case GIFTS_LOADED:
      return { ...state, gifts: action.gifts };
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
      return { ...state, gifts: state.gifts.filter(g => g.id !== action.id) };
    default:
      return state;
  }
};

export default lists;
