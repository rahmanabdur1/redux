

// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './features/authSlice';


// export const store = configureStore({
//   reducer: {
//     products:authSlice,
//   },
// });


// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import authSlice, { listenAuthStateChanges } from './features/authSlice';


const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Listen to auth state changes and dispatch setUser action
store.dispatch(listenAuthStateChanges());

export default store;
