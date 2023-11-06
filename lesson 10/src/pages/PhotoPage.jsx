import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, selectPhotos } from '../redux/photosSlice';

function PhotoPage() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const loading = useSelector((state) => state.photos.loading);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      <h2>Список фотографій</h2>
      {loading === 'pending' ? (
        <p>Loading...</p>
      ) : loading === 'fulfilled' ? (
        photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))
      ) : (
        <p>Error: {loading === 'rejected' ? 'Failed to fetch data' : null}</p>
      )}
    </div>
  );
}


export default PhotoPage;
