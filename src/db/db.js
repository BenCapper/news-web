import { getDatabase, ref, child, get } from "firebase/database";

export const getAll = ( ) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `stories/01-19-23`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val()
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
};