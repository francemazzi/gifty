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
const userCollectionRef = collection(db, "users");

class UserDataService {
  addUsers = (newUser: any) => {
    return addDoc(userCollectionRef, newUser);
  };
  updateUsers = (id: string, updateUser: any) => {
    //check se abbiamo gift o no dentro a collection
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updateUser);
  };
  deleteUser = (id: string) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };
  getAllusers = () => {
    return getDocs(userCollectionRef);
  };
  getUser = (id: string) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();
