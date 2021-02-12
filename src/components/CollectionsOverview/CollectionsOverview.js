import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../selectors/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './collectionsOverview.scss';

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {/* destructure properties from shop data and pass them all into CollectionPreview */}
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

export default connect(mapStateToProps)(CollectionsOverview);
