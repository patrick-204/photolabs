import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Array helper method
  const photos = Array.from({ length: 3 }, (_, index) => (
    <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  ));

  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
