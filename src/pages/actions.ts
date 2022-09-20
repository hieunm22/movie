import { Pagination, ReduxState } from "../types/Redux"
import * as API from "./API"

export const getAllPlaying = async (_: ReduxState, page: number) => {
  const response = await API.getAllPlaying(page)
  const allPlaying = response.results

  const pagination: Pagination = {
    currentPage: response.page,
    pageSize: 20,
    siblingCount: 1,
    totalCount: response.total_results,
    totalPages: response.total_pages
  }
  return {
    allPlaying,
    currentPage: response.page,
    pagination
  }
}

export const setCurrentPage = (_: ReduxState, currentPage: number) => ({
  currentPage
})

export const getMovieDetail = async (_: ReduxState, movieId: number) => {
  const detail = await API.getMovieDetail(movieId)
  return {
    detail
  }
}
