
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import db from "./db";

export const addItem = async (name, cost) => {
	await addDoc(collection(db, "todo"), {
		name, cost
	})

}

export const deleteItem = async (id) => {
	await deleteDoc(doc(db, "todo", id));
}

