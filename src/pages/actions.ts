import { Pagination, ReduxState } from "../types/Redux"
import * as API from "./API"

function handleErrorResponse(response: any) {
  if (response.message) {
    let json: any = ""
    try {
      json = JSON.parse(response.message)
    } catch (error) {
      json = response.message
    }
    const error = `Error ${response.status || "unknown"} - ${json.status_message ?? json}`

    return {
      error
    }
  }
}

export const getAllPlaying = async (props: ReduxState, page: number) => {
  const response = await API.getAllPlaying(page)
  const handle = handleErrorResponse(response)
  if (handle) {
    return handle
  }
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
  const handle = handleErrorResponse(detail)
  if (handle) {
    return handle
  }
  return {
    detail
  }
}

export const clearErrorMessage = (_: ReduxState) => ({
  error: ""
})

export const searchMovie = async (_: ReduxState, query: string, page: number) => {
  const response = await API.searchMovie(query, page)
  const handle = handleErrorResponse(response)
  if (handle) {
    return handle
  }
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
