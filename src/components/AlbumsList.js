import { useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  console.log("data is -->", data);
  return (
    <div>
      {isFetching && <Skeleton className="h-10 w-full"></Skeleton>}
      {error && <div>Error loading the albums...</div>}
      {!isFetching &&
        data.map((album) => {
          const header = <div>{album.title}</div>;
          return (
            <ExpandablePanel header={header} key={album.id}>
              List of photos in the album
            </ExpandablePanel>
          );
        })}
    </div>
  );
}

export default AlbumsList;
