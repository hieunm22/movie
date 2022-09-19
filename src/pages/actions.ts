import { ReduxState } from "../types/ReduxState"
import * as API from "./API"

export const getAllPlaying = async (_: ReduxState) => {
  const response = await API.getAllPlaying()
  const allPlaying = response.results
  return {
    allPlaying
  }
}

export const getMovieDetail = async (_: ReduxState, movieId: number) => {
  console.log("getMovieDetail");
  const response = await API.getMovieDetail(movieId)
  const allPlaying = response.results
  return {
    allPlaying
  }
}
