import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4iBNgSmb3lcho6slw1Rx4kJj3Nve5xss",
    authDomain: "clothing-store-868b6.firebaseapp.com",
    projectId: "clothing-store-868b6",
    storageBucket: "clothing-store-868b6.appspot.com",
    messagingSenderId: "595738720360",
    appId: "1:595738720360:web:542566a7be9c734b84e3dd",
    measurementId: "G-3Z5481G2NP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Creating New User or getting user data from firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const useRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await useRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await useRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console("error creating user", error.message);
        }
    }
    return useRef;
};

// Importing the shop collections data from json file into firebase storege
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();

    objectToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

// export const convertCollectionsSnapshotToMap = (collections) => {
//     const transformedCollection = collections.docs.map((doc) => {
//         const { title, items } = doc.data();

//         return {
//             routeName: encodeURI(title.toLowerCase()),
//             id: doc.id,
//             title,
//             items,
//         };
//     });

//     return transformedCollection.reduce((accumulator, collection) => {
//         accumulator[collection.title.toLowerCase()] = collection;
//         return accumulator;
//     }, {});
// };

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

// export const getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//             unsubscribe();
//             resolve(userAuth);
//         }, reject);
//     });
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
