import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

const AlbumsListItem = ({ album }) => {
  const header = (
    <div className="m-2 flex flex-row items-center justify-between">
      <GoTrashcan className="mr-2" />
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
