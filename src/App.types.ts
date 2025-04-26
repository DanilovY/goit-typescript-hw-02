export type Img = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

export type ApiResponse = {
  results: Img[];
};
