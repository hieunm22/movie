import { Fragment } from "react"
import { connect } from "redux-zero/react"
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen"
import { ReduxState } from "../../types/Redux"
import { getAllPlaying } from "../API"
import { HomeProps, Movie } from "./Home.types"
import MovieTile from "./MovieTile"

const MovieList = (props: HomeProps) => {
  if (!props.searchResults) {
    return <LoadingScreen />
  }
  if (props.searchResults.length === 0) {
    return (<div className="movie-container">
      No match result
    </div>)
  }
  return (
    <div className="movie-container">
    {props.searchResults.map((movie: Movie) => {
        const backdropPath = process.env.REACT_APP_IMAGE_BASE_URL + movie.backdrop_path
        return (
          <Fragment key={movie.id}>
            <MovieTile movie={movie} backdropPath={backdropPath} />
          </Fragment>
        )
      })}
  </div>
  )
}

const actions = {
  getAllPlaying
}

const mapToProps = ({ searchResults, currentPage }: ReduxState) => ({
  searchResults,
  currentPage
})

const connected = connect(mapToProps, actions)

export default connected(MovieList)