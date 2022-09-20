import { Fragment, useEffect } from "react"
import { connect } from "redux-zero/react"
import { getAllPlaying } from "../actions"
import { ReduxState } from "../../types/Redux"
import MovieTile from "./MovieTile"
import { HomeProps, Movie } from "./Home.types"
import "./Home.scss"
import Pagination from "./Pagination"

const Home = (props: HomeProps) => {
  const refreshList = async () => {
    await props.getAllPlaying(props.currentPage)
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <>

      <div className="movie-container">
        {props.allPlaying &&
          props.allPlaying.map((movie: Movie) => {
            const backdropPath = process.env.REACT_APP_IMAGE_BASE_URL + movie.backdrop_path
            return (
              <Fragment key={movie.id}>
                <MovieTile movie={movie} backdropPath={backdropPath} />
              </Fragment>
            )
          })}
      </div>
      <Pagination {...props} />
      <div className="return-btn" onClick={refreshList}>
        <i className="fa-solid fa-arrows-rotate" />
        Refresh list
      </div>
    </>
  )
}

const actions = {
  getAllPlaying
}

const mapToProps = ({ allPlaying, currentPage }: ReduxState) => ({
  allPlaying,
  currentPage
})

const connected = connect(mapToProps, actions)

export default connected(Home)
