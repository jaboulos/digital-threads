import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../selectors/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './collectionsOverview.scss';

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

export default connect(mapStateToProps)(CollectionsOverview);
