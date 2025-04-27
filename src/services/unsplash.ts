import axios from "axios";
import { ApiResponse } from "../App.types";

const API_KEY: string = `Yn2AUr0WPFDv-oE2gAd9b1ilKeLf9bfW7mOvy3qJnik`;
export const fetchImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}&per_page=20`
  );

  return response.data;
};
