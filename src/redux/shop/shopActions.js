import shopActionTypes from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

// action that creates an action and returns an action
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    // creates collections
    const collectionRef = firestore.collection('collections');
    // dispatch fetchCollectionStart action, switches reducer state, isFetching to true
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // dispatch success action after get call to api resolves
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // if api fails dispatch fetchCollectionsOnFailure
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
