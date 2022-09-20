import { Movie } from "../pages/Home/Home.types"
import { MovieDetailProps } from "../pages/MovieDetail/MovieDetail.types"

export interface ReduxState {
  allPlaying: Movie[]
  detail: MovieDetailProps | null
  currentPage: number
  error: any
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
  getAllPlaying: (page: number) => ReduxState
  getMovieDetail: (movieId: number) => ReduxState
}
