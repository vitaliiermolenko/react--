import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../redux/usersSlice';

function UserPage() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Список користувачів</h2>
      {loading === 'pending' ? (
        <p>Loading...</p>
      ) : loading === 'fulfilled' ? (
        users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))
      ) : (
        <p>Error: {loading === 'rejected' ? 'Failed to fetch data' : null}</p>
      )}
    </div>
  );
}


export default UserPage;
