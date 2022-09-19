import { Movie } from "../pages/Home/Home.types"
import { MovieDetailProps } from "../pages/MovieDetail/MovieDetail.types"

export interface ReduxState {
  allPlaying: Movie[]
  detail: MovieDetailProps | null
  currentPage: number
  pagination?: Pagination
}

export interface Pagination {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
  totalPages: number
}

export interface ReduxActions {
  getAllPlaying: () => ReduxState
  getMovieDetail: (movieId: number) => ReduxState
  gotoPage: (page: number) => ReduxState
}
