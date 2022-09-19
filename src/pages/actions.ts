import { ReduxState } from "../types/Redux"
import * as API from "./API"

export const getAllPlaying = async (_: ReduxState) => {
  const response = await API.getAllPlaying()
  const allPlaying = response.results
  return {
    allPlaying
  }
}

export const getMovieDetail = async (_: ReduxState, movieId: number) => {
  const detail = await API.getMovieDetail(movieId)
  return {
    detail
  }
}

export const remove = (props: ReduxState, id: number) => {
  const clone = [...props.allPlaying]
  const removeList = clone.filter(f => f.id !== id)
  return {
    allPlaying: removeList
  }
}