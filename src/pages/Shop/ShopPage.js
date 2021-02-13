import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import Collection from '../Collection/Collection';

import './shopPage.scss'; // added styles here

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
