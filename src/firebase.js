import firebase from 'firebase'

export const db = firebase
    .initializeApp({ projectId: 'pwaps-b6418' })
    .firestore()