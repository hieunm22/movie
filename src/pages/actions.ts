import { Pagination, ReduxState } from "../types/Redux"
import * as API from "./API"

export const getAllPlaying = async (props: ReduxState, page: number) => {
  const response = await API.getAllPlaying(page)  
  const searchResults = response.results

  const pagination: Pagination = {
    currentPage: response.page,
    pageSize: 20,
    siblingCount: 1,
    totalCount: response.total_results,
    totalPages: response.total_pages
  }
  return {
    searchResults,
    query: props.query,
    currentPage: response.page,
    pagination: searchResults.length > 0 ? pagination : null
  }
}

export const getMovieDetail = async (_: ReduxState, movieId: number) => {
  const detail = await API.getMovieDetail(movieId)
  return {
    detail
  }
}

export const searchMovie = async (_: ReduxState, query: string, page: number) => {
  const response = await API.searchMovie(query, page)
  const searchResults = response.results

  const pagination: Pagination = {
    currentPage: response.page,
    pageSize: 20,
    siblingCount: 1,
    totalCount: response.total_results,
    totalPages: response.total_pages
  }

  return {
    searchResults,
    query,
    currentPage: page,
    pagination: searchResults.length > 0 ? pagination : null
  }
}
