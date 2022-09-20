import { connect } from "redux-zero/react"
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen"
import { ReduxState } from "../../types/Redux"
import { getAllPlaying } from "../API"
import { HomeProps } from "./Home.types"

const Pagination = (props: HomeProps) => {
  const onPageChanged = (page: number) => () => {
    props.getAllPlaying(page)
  }

  const pagination = props.pagination
  if (!pagination) {
    return <LoadingScreen />
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
  getAllPlaying
}

const mapToProps = ({ allPlaying, currentPage, pagination }: ReduxState) => ({
  allPlaying,
  currentPage,
  pagination
})

const connected = connect(mapToProps, actions)

export default connected(Pagination)