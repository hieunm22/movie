import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from "redux-zero/react"
import { getAllPlaying } from "../actions"
import { ReduxState } from "../../types/Redux"
import MovieTile from "./MovieTile"
import { AllMoviesProps, Movie } from "./AllMovies.types"
import "./AllMovies.scss"

const AllMovies = (props: AllMoviesProps) => {
  useEffect(() => {
    const wait = async () => {
      await props.getAllPlaying()
    }
    wait()
  }, [])

  return (
    <>
      <div className="movie-container">
        {props.allPlaying &&
          props.allPlaying.map((movie: Movie) => {
            const backdropPath = process.env.REACT_APP_IMAGE_BASE_URL + movie.backdrop_path
            return <Fragment key={movie.id}>
              <MovieTile movie={movie} backdropPath={backdropPath} />
            </Fragment>
          })}
      </div>
      <Link className="return-btn" to="/">
        <i className="fa-solid fa-house" />
        Return to home page
      </Link>
    </>
  )
}

const actions = {
  getAllPlaying
}

const mapToProps = ({ allPlaying }: ReduxState) => ({
  allPlaying
})

const connected = connect(mapToProps, actions)

export default connected(AllMovies)
