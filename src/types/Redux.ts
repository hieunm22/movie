import { Movie } from "../pages/AllMovies/AllMovies.types"
import { MovieDetailProps } from "../pages/MovieDetail/MovieDetail.types"

export interface ReduxState {
  allPlaying: Movie[]
  detail: MovieDetailProps | null
}

export interface ReduxActions {
  getAllPlaying: () => ReduxState,
  getMovieDetail: (movieId: number) => ReduxState
}
