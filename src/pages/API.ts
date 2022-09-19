import wretch from "wretch"
// import FormDataAddon from "wretch/addons/formData"
import QueryStringAddon from "wretch/addons/queryString"

const CLIENT_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL

const request = wretch(CLIENT_BASE_URL)

const EP = {  // EP = end points
  getAllPlaying: "/movie/now_playing",
  getMovieDetail: "/movie"
}

export const getAllPlaying = () => request.url(EP.getAllPlaying)
            .addon(QueryStringAddon)
            .query({ api_key: process.env.REACT_APP_API_KEY })
            .get()
            .json(handleGetAll)
            .catch(handleError)

export const getMovieDetail = (movieId: number) => request.url(`${EP.getMovieDetail}/${movieId}`)
            .addon(QueryStringAddon)
            .query({ api_key: process.env.REACT_APP_API_KEY })
            .get()
            .json(handleGetAll)
            .catch(handleError)

const handleGetAll = (response: any) => {
  return response
}

const handleError = (error: any) => ({ error })
