import { useState, useEffect } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favouritePhotoIds, setFavouritePhotoIds] = useState([]);

  // For when have to load data from API
  useEffect(() => {
    // Dummy load of API
    const loadData = () => {
      setTimeout(() => {
        console.log('Data loaded');
      }, 1000);
    };

    loadData();
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (favouritePhotoIds.includes(photoId)) {
      setFavouritePhotoIds(favouritePhotoIds.filter(id => id !== photoId));
    } else {
      setFavouritePhotoIds([...favouritePhotoIds, photoId]);
    }
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  return {
    state: {
      selectedPhoto,
      favouritePhotoIds,
    },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
