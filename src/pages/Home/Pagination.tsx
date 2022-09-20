import { connect } from "redux-zero/react"
import { ReduxState } from "../../types/Redux"
import { searchMovie } from "../actions"
import { getAllPlaying } from "../API"
import { HomeProps } from "./Home.types"

const Pagination = (props: HomeProps) => {
  const onPageChanged = (page: number) => () => {
    if (!props.query) {
      props.getAllPlaying(page)
    }
    else {
      props.searchMovie(props.query, page)
    }
  }

  const pagination = props.pagination
  if (!pagination) {
    return <></>
  }

  return (
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
  )
}

const actions = {
  getAllPlaying,
  searchMovie
}

const mapToProps = ({ searchResults, currentPage, query, pagination }: ReduxState) => ({
  searchResults,
  currentPage,
  query,
  pagination
})

const connected = connect(mapToProps, actions)

export default connected(Pagination)