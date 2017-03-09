import { database } from './firebase';

// Modello dati su Realtime Database:
//   lists/{listId}/budget
//   lists/{listId}/createdAt
//   lists/{listId}/gifts/{giftId}/{ gift, createdAt }

const listRef = listId => database.ref('lists/' + listId);
const giftsRef = listId => database.ref('lists/' + listId + '/gifts');

// Crea una nuova lista e restituisce il suo id (da mettere nell'URL condivisibile).
export const createList = () => {
  const ref = database.ref('lists').push();
  return ref.set({ budget: 0, createdAt: Date.now() }).then(() => ref.key);
};

export const getList = listId =>
  listRef(listId)
    .once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (!data) return null;
      return {
        id: listId,
        budget: typeof data.budget === 'number' ? data.budget : 0,
        createdAt: typeof data.createdAt === 'number' ? data.createdAt : 0
      };
    });

export const setBudget = (listId, budget) =>
  listRef(listId)
    .child('budget')
    .set(budget);

export const getGifts = listId =>
  giftsRef(listId)
    .orderByChild('createdAt')
    .once('value')
    .then(snapshot => {
      const gifts = [];
      snapshot.forEach(child => {
        const data = child.val();
        gifts.push({
          id: child.key,
          gift: String(data.gift || ''),
          createdAt: typeof data.createdAt === 'number' ? data.createdAt : 0
        });
      });
      return gifts;
    });

export const addGift = (listId, gift) => {
  const createdAt = Date.now();
  const ref = giftsRef(listId).push();
  return ref.set({ gift, createdAt }).then(() => ({
    id: ref.key,
    gift,
    createdAt
  }));
};

export const updateGift = (listId, giftId, gift) =>
  giftsRef(listId)
    .child(giftId)
    .update({ gift });

export const deleteGift = (listId, giftId) =>
  giftsRef(listId)
    .child(giftId)
    .remove();
