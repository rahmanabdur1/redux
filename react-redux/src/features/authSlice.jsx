
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get('http://localhost:5000/products');
//   return response.data;
// });

// const authSlice = createSlice({
//   name: 'products',
//   initialState: [],
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default authSlice.reducer;


// authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

// Async Thunks
export const signInAsync = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
  return auth.currentUser;
});

export const createUserAsync = createAsyncThunk('auth/createUser', async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  return auth.currentUser;
});

export const updateUserAsync = createAsyncThunk('auth/updateUser', async (userInfo) => {
  await updateProfile(auth.currentUser, userInfo);
  return auth.currentUser;
});

export const logOutAsync = createAsyncThunk('auth/logOut', async () => {
  await signOut(auth);
});

export const listenAuthStateChanges = () => (dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    dispatch(setUser(currentUser));
  });

  return unsubscribe;
};

// Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(logOutAsync.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
