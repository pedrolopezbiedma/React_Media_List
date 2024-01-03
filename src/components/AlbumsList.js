import { useFetchAlbumsQuery, usePostAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = usePostAlbumMutation();
  console.log("data is -->", data);

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      {isFetching && <Skeleton className="h-10 w-full"></Skeleton>}
      {error && <div>Error loading the albums...</div>}
      {!isFetching && (
        <div>
          <div>
            <h3>Albums for {user.name}</h3>
            <Button onClick={handleAddAlbum}>+ Add Album</Button>
          </div>
          {data.map((album) => {
            const header = <div>{album.title}</div>;
            return (
              <ExpandablePanel header={header} key={album.id}>
                List of photos in the album
              </ExpandablePanel>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AlbumsList;
