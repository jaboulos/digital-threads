import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase}</h1>
    <div className='preview'>
      {/* only display 4 items at a time, use filter */}
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
