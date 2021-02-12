import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../selectors/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import './directory.scss';

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </div>
);

export default connect(mapStateToProps)(Directory);
