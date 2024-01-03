import { useFetchPhotosQuery } from "../store";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  console.log("Photos for the album are -->", data);

  return <h1>This is the PhotosList</h1>;
};

export default PhotosList;
