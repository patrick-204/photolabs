import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import topics from './mocks/topics'; 

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { selectedPhoto, favouritePhotoIds, photoData, topicData } = state; 

  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData} 
        onPhotoClick={setPhotoSelected}
        toggleFavourite={(photoId) => {
          if (favouritePhotoIds.includes(photoId)) {
            removeFromFavPhotoIds(photoId);
          } else {
            updateToFavPhotoIds(photoId);
          }
        }}
        favourites={favouritePhotoIds}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={photoData} 
          onClose={onClosePhotoDetailsModal}
          toggleFavourite={(photoId) => {
            if (favouritePhotoIds.includes(photoId)) {
              removeFromFavPhotoIds(photoId);
            } else {
              updateToFavPhotoIds(photoId);
            }
          }}
          favourites={favouritePhotoIds}
        />
      )}
    </div>
  );
};

export default App;
