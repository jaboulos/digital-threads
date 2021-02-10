import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import { addItem } from '../../redux/cart/cartActions';

import './collectionItem.scss';

// addItem dispatch is now available to be passed in as props to CollectionItem
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
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
      <Button onClick={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
