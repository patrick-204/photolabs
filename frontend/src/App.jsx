import React from 'react';

import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={onPhotoSelect}
        toggleFavourite={updateToFavPhotoIds}
        favourites={state.favouritePhotoIds}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={photos} // Example: Replace with actual similar photos data
          onClose={onClosePhotoDetailsModal}
          toggleFavourite={updateToFavPhotoIds}
          favourites={state.favouritePhotoIds}
        />
      )}
    </div>
  );
};

export default App;
