import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "../api/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

// Setting up listeners
setupListeners(store.dispatch);

// Exporting thunks
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

// Exporting generated query & mutations
export {
  useFetchAlbumsQuery,
  usePostAlbumMutation,
  useRemoveAlbumMutation,
} from "../api/albumsApi";
