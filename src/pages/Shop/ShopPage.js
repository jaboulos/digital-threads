import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// pull in firestore library
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shopActions';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

import './shopPage.scss'; // added styles here

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    // whenever collectionRef updates or code is run for the first time, collectionRef will send a snapshot representing the code of our collections objects array at the time when this code renders
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={Collection}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
