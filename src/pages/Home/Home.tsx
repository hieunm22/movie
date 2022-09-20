import { Fragment, useEffect } from "react"
import { connect } from "redux-zero/react"
import { getAllPlaying } from "../actions"
import { ReduxState } from "../../types/Redux"
import MovieTile from "./MovieTile"
import { AllMoviesProps, Movie } from "./Home.types"
import "./Home.scss"

const Home = (props: AllMoviesProps) => {
  const refreshList = async () => {
    await props.getAllPlaying(props.currentPage)
  }

  useEffect(() => {
    refreshList()
  }, [])

  const pagination = props.pagination

  const onPageChanged = (page: number) => () => {
    props.getAllPlaying(page)
  }

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
      {pagination && (
        <div className="pagination">
          <div className={`page ${props.currentPage === 1 && "active"}`} onClick={onPageChanged(1)}>
            1
          </div>
          {props.currentPage > pagination.siblingCount + 2 && (
            <div className="page no-pointer">...</div>
          )}
          {props.currentPage >= pagination.siblingCount + 2 && (
            <div className="page" onClick={onPageChanged(props.currentPage - 1)}>
              {props.currentPage - 1}
            </div>
          )}
          {props.currentPage >= pagination.siblingCount + 1 &&
            props.currentPage <= pagination.totalPages && (
              <div className="page active">{props.currentPage}</div>
            )}
          {props.currentPage < pagination.totalPages - pagination.siblingCount && (
            <div className="page" onClick={onPageChanged(props.currentPage + 1)}>
              {props.currentPage + 1}
            </div>
          )}
          {props.currentPage < pagination.totalPages - pagination.siblingCount - 1 && (
            <div className="page no-pointer">...</div>
          )}
          {props.currentPage < pagination.totalPages && (
            <div className="page" onClick={onPageChanged(pagination.totalPages)}>
              {pagination.totalPages}
            </div>
          )}
        </div>
      )}
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

const mapToProps = ({ allPlaying, currentPage, pagination }: ReduxState) => ({
  allPlaying,
  currentPage,
  pagination
})

const connected = connect(mapToProps, actions)

export default connected(Home)
