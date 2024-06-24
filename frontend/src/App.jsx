import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Array helper method
  // const photos = Array.from({ length: 3 }, (_, index) => (
  //   <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
  // ));

  return (
    <div className="App">
        <PhotoList />
        <TopicList />
    </div>
  );
};

export default App;
