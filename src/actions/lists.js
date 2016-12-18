import * as giftService from '../services/gift.services';
import { GIFTS_LOADED, GIFT_ADD, GIFT_EDIT, GIFT_REMOVE } from './types';

export const loadGifts = () => dispatch =>
  giftService.getGifts().then(gifts => {
    dispatch({ type: GIFTS_LOADED, gifts });
  });

export const addGift = gift => dispatch =>
  giftService.addGift(gift).then(saved => {
    dispatch({ type: GIFT_ADD, gift: saved });
    return saved;
  });

export const editGift = (id, gift) => dispatch =>
  giftService.updateGift(id, gift).then(() => {
    dispatch({ type: GIFT_EDIT, id, gift });
  });

export const removeGift = id => dispatch =>
  giftService.deleteGift(id).then(() => {
    dispatch({ type: GIFT_REMOVE, id });
  });
