import React from 'react';

function UserList({ users }) {
  return (
    <div>
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
