import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      // Endpoint to fetch the albums photos
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            method: "GET",
            url: "/photos",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      // Endpoint to add a new photo to an album
      postPhoto: builder.mutation({
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.url({ width: 150, height: 150 }),
            },
          };
        },
      }),
    };
  },
});

// Exporting the endpoints.
export const { useFetchPhotosQuery, usePostPhotoMutation } = photosApi;
export { photosApi };
