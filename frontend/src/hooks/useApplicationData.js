import { useState } from 'react';

// Simulated API data or imports
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [favouritePhotoIds, setFavouritePhotoIds] = useState([]);

  const [topicsState, setTopicsState] = useState({
    topics: [],
    selectedTopic: null,
  });

  // Simulate initial data loading (photos and topics)
  useState(() => {
    setSelectedPhoto(null); 
    setFavouritePhotoIds([]); 
    
    setTopicsState(prevState => ({
      ...prevState,
      topics,
    }));
  });

  const updateToFavPhotoIds = (photoId) => {
    if (favouritePhotoIds.includes(photoId)) {
      setFavouritePhotoIds(prevIds => prevIds.filter(id => id !== photoId));
    } else {
      setFavouritePhotoIds(prevIds => [...prevIds, photoId]);
    }
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  // Load topics
  const onLoadTopic = (topicId) => {
    const selectedTopic = topicsState.topics.find(topic => topic.id === topicId);
    setTopicsState(prevState => ({ ...prevState, selectedTopic }));
  };

  return {
    selectedPhoto,
    favouritePhotoIds,
    topicsState,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onLoadTopic,
  };
};

export default useApplicationData;
