import axios from "axios";

const API_KEY = `Yn2AUr0WPFDv-oE2gAd9b1ilKeLf9bfW7mOvy3qJnik`;
export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=20`
  );

  return response.data.results;
};
