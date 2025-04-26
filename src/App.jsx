import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/unsplash";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
// import { toast } from "react-hot-toast";
// import axios from "axios";

function App() {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("");
  const [isload, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;
    const handleDate = async () => {
      try {
        setIsLoad(true);
        setError(false);
        const res = await fetchImages(query, page);
        setPhoto((prev) => [...prev, ...res]);
      } catch {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };
    handleDate();
  }, [query, page]);

  const getTypeDate = (item) => {
    setQuery(item);
    setPhoto([]);
    setPage(1);
  };
  const openModal = (image) => {
    setSelectedPhoto(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <SearchBar handSub={getTypeDate} />

      <ImageGallery photo={photo} onClick={openModal} />

      {photo.length > 0 && <LoadMoreBtn setPage={setPage} />}
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
