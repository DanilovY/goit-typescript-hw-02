import { Img } from "../../App.types";
import s from "./ImageCard.module.css";
interface ImageCardProps {
  item: Img;
}

const ImageCard = ({ item }: ImageCardProps) => {
  return (
    <div>
      <img className={s.img} src={item.urls.small} alt={item.alt_description} />
    </div>
  );
};

export default ImageCard;
