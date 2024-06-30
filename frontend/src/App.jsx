import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic, 
  } = useApplicationData();

  const { selectedPhoto, favouritePhotoIds, photoData, topicData } = state;

  const handleToggleFavourite = (photoId) => {
    if (favouritePhotoIds.includes(photoId)) {
      removeFromFavPhotoIds(photoId);
    } else {
      updateToFavPhotoIds(photoId);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData}
        onPhotoClick={setPhotoSelected}
        toggleFavourite={handleToggleFavourite}
        favourites={favouritePhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={photoData}
          onClose={onClosePhotoDetailsModal}
          toggleFavourite={handleToggleFavourite}
          favourites={favouritePhotoIds}
        />
      )}
    </div>
  );
};

export default App;
