import { database } from './firebase';

// Tutti i regali stanno sotto un unico nodo `gifts` del Realtime Database.
const giftsRef = database.ref('gifts');

export const getGifts = () =>
  giftsRef
    .orderByChild('createdAt')
    .once('value')
    .then(snapshot => {
      const gifts = [];
      snapshot.forEach(child => {
        const data = child.val();
        gifts.push({
          id: child.key,
          gift: String(data.gift || ''),
          createdAt: data.createdAt || 0
        });
      });
      return gifts;
    });

export const addGift = gift => {
  const createdAt = Date.now();
  const ref = giftsRef.push();
  return ref.set({ gift, createdAt }).then(() => ({
    id: ref.key,
    gift,
    createdAt
  }));
};

export const updateGift = (id, gift) => giftsRef.child(id).update({ gift });

export const deleteGift = id => giftsRef.child(id).remove();
