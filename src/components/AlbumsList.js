import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  console.log("data is -->", data);
  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
