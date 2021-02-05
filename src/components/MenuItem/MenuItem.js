import React from 'react';
// HOC -> function that takes a component as an argument and returns a modified component
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

// has access to history prop because withRouter HOC powered up this component and gave it access to more props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size || ''} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem); // menuItem is wrapped in this HOC and now has access to location, match and history props
