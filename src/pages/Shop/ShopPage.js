import React from 'react';

import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {/* destructure properties from shop data and pass them all into CollectionPreview */}
        {collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
