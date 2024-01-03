import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      // Endpoint to get the user's albums
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            method: "GET",
            url: "/albums",
            params: {
              userId: user.id,
            },
          };
        },
      }),
      // Endpoint to create an album to an user
      postAlbum: builder.mutation({
        query: (user) => {
          return {
            method: "POST",
            url: "albums",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
    };
  },
});

// Exporting the endpoints.
export const { useFetchAlbumsQuery, usePostAlbumMutation } = albumsApi;
export { albumsApi };
