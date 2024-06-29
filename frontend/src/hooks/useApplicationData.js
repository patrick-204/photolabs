import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      if (!state.favouritePhotoIds.includes(action.payload.photoId)) {
        return {
          ...state,
          favouritePhotoIds: [...state.favouritePhotoIds, action.payload.photoId],
        };
      }
      return state;

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotoIds: state.favouritePhotoIds.filter(
          (id) => id !== action.payload.photoId
        ),
      };

    case ACTIONS.SET_PHOTO_SELECTED:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        selectedPhoto: null,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photos,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topics,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  photos: [],
  topics: [],
  favouritePhotoIds: [],
  selectedPhoto: null,
  photoData: [],
  topicData: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch initial data
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: {
            photos: data,
          },
        });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });

    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: {
            topics: data,
          },
        });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: {
            photos: data,
          },
        });
      })
      .catch(error => {
        console.error(`Error fetching photos for topic ${topicId}:`, error);
      });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: ACTIONS.FAV_PHOTO_ADDED,
      payload: {
        photoId,
      },
    });
  };

  const removeFromFavPhotoIds = (photoId) => {
    dispatch({
      type: ACTIONS.FAV_PHOTO_REMOVED,
      payload: {
        photoId,
      },
    });
  };

  const setPhotoSelected = (photo) => {
    dispatch({
      type: ACTIONS.SET_PHOTO_SELECTED,
      payload: {
        photo,
      },
    });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL,
    });
  };

  return {
    state,
    fetchPhotosByTopic,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
