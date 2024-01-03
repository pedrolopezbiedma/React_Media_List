const PhotosListItem = ({ photo }) => {
  return (
    <div className="m-2 cursor-pointer">
      <img className="h-20 w-20" src={photo.url} alt="random photo" />
    </div>
  );
};

export default PhotosListItem;
