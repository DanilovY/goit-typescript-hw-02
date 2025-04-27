import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/unsplash";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ApiResponse, Img } from "./App.types";
// import { toast } from "react-hot-toast";
// import axios from "axios";

function App() {
  const [photo, setPhoto] = useState<Img[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isload, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Img | null>(null);

  useEffect(() => {
    if (!query) return;
    const handleDate = async () => {
      try {
        setIsLoad(true);
        setError(false);
        const res = await fetchImages(query, page);
        setPhoto((prev: Img[]) => [...prev, ...res.results]);
      } catch {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };
    handleDate();
  }, [query, page]);

  const getTypeDate = (item: string) => {
    setQuery(item);
    setPhoto([]);
    setPage(1);
  };
  const openModal = (image: Img) => {
    setSelectedPhoto(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar handSub={getTypeDate} />

      <ImageGallery photo={photo} onClick={openModal} />

      {photo.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
      {photo.length === 0 && <p>List is empty! Please search sth;)</p>}

      <ImageModal
        photo={selectedPhoto}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />

      {isload && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}

export default App;
