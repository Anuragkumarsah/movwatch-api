export type IError = {
  error: string;
};

export type ITrendingMoviesResponse = {
  currentPage: number;
  hasNextPage: boolean;
  results: ITrendingMovie[];
  length: number;
  "buy me a coffee": string;
};

export type ITrendingMovie = {
  id: string;
  title: string;
  img: string;
  detail: {
    rating: string;
    quality: string;
    year: string;
  };
};

export type ITrendingTVShowsResponse = {
  currentPage: number;
  hasNextPage: boolean;
  results: ITrendingTVShow[];
  length: number;
  "buy me a coffee": string;
};

export type ITrendingTVShow = {
  id: string;
  title: string;
  img: string;
  detail: {
    rating: string;
    quality: string;
    recent: string;
  };
};

export type ILatestMoviesResponse = {
  currentPage: number;
  hasNextPage: boolean;
  results: ILatestMovie[];
  total: number;
  "buy me a coffee": string;
}

export type ILatestMovie = {
  id: string;
  title: string;
  img: string;
  detail: {
    rating: string;
    quality: string;
    year: string;
  }
}

export type ILatestTVShowsResponse = {
  currentPage: number;
  hasNextPage: boolean;
  results: ILatestTVShow[];
  total: number;
  "buy me a coffee": string;
}

export type ILatestTVShow = {
  id: string;
  title: string;
  img: string;
  detail: {
    rating: string;
    quality: string;
    recent: string;
  };
};
