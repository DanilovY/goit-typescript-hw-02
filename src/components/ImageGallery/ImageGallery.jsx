import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photo, onClick }) => {
  return (
    <ul className={s.galleryList}>
      {photo.length > 0 &&
        photo.map((item) => {
          return (
            <li
              onClick={() => onClick(item)}
              className={s.galleryitem}
              key={item.id}
            >
              <ImageCard item={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
