import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../selectors/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {/* destructure properties from shop data and pass them all into CollectionPreview */}
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

export default connect(mapStateToProps)(ShopPage);
