import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { favouritesCount } = props;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={favouritesCount}/>
    </div>
  ) 
};

export default FavBadge;