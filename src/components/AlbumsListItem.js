import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <div className="m-2 flex flex-row items-center justify-between">
      <GoTrashcan className="mr-2" onClick={handleRemoveAlbum} />
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
