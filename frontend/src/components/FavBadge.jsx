import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { favouritesCount } = props;

  return (
    <div className='fav-badge'>
      <span className='red-fav-icon'>
        <FavIcon displayAlert={favouritesCount} selected={true}/>
      </span>
    </div>
  ) 
};

export default FavBadge;