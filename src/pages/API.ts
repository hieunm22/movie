import wretch from "wretch"
// import FormDataAddon from "wretch/addons/formData"
import QueryStringAddon from "wretch/addons/queryString"

const CLIENT_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
const api_key = process.env.REACT_APP_API_KEY

const request = wretch(CLIENT_BASE_URL)
  .addon(QueryStringAddon)

const EP = {  // EP = end points
  getAllPlaying: "/movie/now_playing",
  getMovieDetail: "/movie",
  searchMovie: "/search/movie"
}

export const getAllPlaying = (page: number) => request.url(EP.getAllPlaying)
            .query({ api_key, page })
            .get()
            .json(handleGetAll)
            .catch(handleError)

export const getMovieDetail = (movieId: number) => request.url(`${EP.getMovieDetail}/${movieId}`)
            .query({ api_key })
            .get()
            .json(handleGetDetail)
            .catch(handleError)

export const searchMovie = (query: string, page: number) => request.url(EP.searchMovie)
            .query({ api_key, query, page })
            .get()
            .json(handleSearch)
            .catch(handleError)

// ----------------------------------------------------------------------------------

const handleGetAll = (response: any) => {
  return response
}

const handleGetDetail = (response: any) => {
  return response
}

const handleSearch = (response: any) => {
  return response
}

const handleError = (error: any) => ({ error })
