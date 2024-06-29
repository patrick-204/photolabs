import React from 'react';

import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const {
    selectedPhoto,
    favouritePhotoIds,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={setPhotoSelected}
        toggleFavourite={updateToFavPhotoIds}
        favourites={favouritePhotoIds}
        onLoadTopic={onLoadTopic}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={photos} // Replace with actual similar photos data
          onClose={onClosePhotoDetailsModal}
          toggleFavourite={updateToFavPhotoIds}
          favourites={favouritePhotoIds}
        />
      )}
    </div>
  );
};

export default App;
