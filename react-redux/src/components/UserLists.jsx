// UserLists.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { registerUser } from '../features/authSlice';

const UserLists = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth?.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        console.log(response,'r')
        dispatch(registerUser(response.data)); // Assuming the response.data is an array of users
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserLists;
