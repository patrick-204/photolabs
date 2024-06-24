import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Array helper method
  // const photos = Array.from({ length: 3 }, (_, index) => (
  //   <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  // ));

  <PhotoList />

  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
