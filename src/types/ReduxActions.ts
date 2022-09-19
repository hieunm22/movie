import { ReduxState } from "./ReduxState"

export interface ReduxActions {
  getAllPlaying: () => ReduxState,
  getMovieDetail: (movieId: number) => ReduxState
}
