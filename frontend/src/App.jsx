import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);

  // Temporary similar photos 
  const similarPhotos = photos;
  // console.log(similarPhotos);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    console.log("Selected photo:", photo);
  };

  const handleCloseModal = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(null);
    }
  };

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick}/>
      {selectedPhoto && similarPhotos && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
          onClose={handleCloseModal}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
      )}
    </div>
  );
};

export default App;
