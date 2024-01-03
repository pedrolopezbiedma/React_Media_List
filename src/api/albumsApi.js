import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      // Endpoint to get the albums
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
    };
  },
});

// Exporting the endpoints.
export const { useFetchAlbumsQuery } = albumsApi;
export { albumsApi };
