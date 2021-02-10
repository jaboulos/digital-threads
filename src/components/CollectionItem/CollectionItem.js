import React from 'react';

import Button from '../Button/Button';

import './collectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <Button inverted>ADD TO CART</Button>
  </div>
);

export default CollectionItem;
