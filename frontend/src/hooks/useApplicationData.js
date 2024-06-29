import { useReducer } from 'react';

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
        photos: action.payload.photos,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics,
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
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const setPhotoData = (photos) => {
    dispatch({
      type: ACTIONS.SET_PHOTO_DATA,
      payload: {
        photos,
      },
    });
  };

  const setTopicData = (topics) => {
    dispatch({
      type: ACTIONS.SET_TOPIC_DATA,
      payload: {
        topics,
      },
    });
  };

  return {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData,
  };
};

export default useApplicationData;
