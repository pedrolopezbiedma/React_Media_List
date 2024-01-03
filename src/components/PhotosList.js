import { useFetchPhotosQuery, usePostPhotoMutation } from "../store";
import Button from "./Button";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = usePostPhotoMutation();
  console.log("Photos for the album are -->", data);

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos for {album.title}</h3>
        <Button loading={false} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
};

export default PhotosList;
