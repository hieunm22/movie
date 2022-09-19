import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "redux-zero/react"
import { getAllPlaying } from "../actions"
import { ReduxState } from "../../types/ReduxState"
import MovieTile from "./MovieTile"
import { AllMoviesProps, Movie } from "./AllMovies.types"
import "./AllMovies.scss"
// import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen"

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
        {props.allPlaying && props.allPlaying.length > 0 &&
          props.allPlaying.map((movie: Movie) => (
            <Fragment key={movie.id}>
              <MovieTile movie={movie} />
            </Fragment>
          ))}
      </div>
      <Link className="return-btn" to="/">
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
