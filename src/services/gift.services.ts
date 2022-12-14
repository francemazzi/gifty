import { db } from "../services/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// costante iniziarele
const giftCollectionRef = collection(db, "gifts");
const userCollectionRef = collection(db, "users");

//aggiunta gift
export class GiftDataService {
  addGifts = (newGift: any) => {
    return addDoc(giftCollectionRef, newGift);
  };
  updateGift = (id: string, updateGift: any) => {
    //check se abbiamo gift o no dentro a collection
    const giftDoc = doc(db, "gifts", id);
    return updateDoc(giftDoc, updateGift);
  };
  //Controllo eliminazione
  deleteGift = (id: string) => {
    const giftDoc = doc(db, "gifts", id);
    return deleteDoc(giftDoc);
  };
  getAllGifts = () => {
    return getDocs(giftCollectionRef);
  };
  getGift = (id: string) => {
    const giftDoc = doc(db, "gifts", id);
    return getDoc(giftDoc);
  };
}

//aggiunta utente
// id: number;
//   username: string;
//   mail: string;
//   password: string;

export default new GiftDataService();
