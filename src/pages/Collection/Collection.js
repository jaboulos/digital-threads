import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../selectors/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './collection.scss';

// ownProps is the props of component we are wrapping in connect
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Collection);
