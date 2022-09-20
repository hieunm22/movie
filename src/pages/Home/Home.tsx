import { useEffect } from "react"
import { connect } from "redux-zero/react"
import { getAllPlaying } from "../actions"
import { ReduxState } from "../../types/Redux"
import { HomeProps } from "./Home.types"
import "./Home.scss"
import Pagination from "./Pagination"
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"
import { searchMovie } from "../actions"
import AlertPopup from "../Common/AlertPopup"

const Home = (props: HomeProps) => {
  const refreshList = async () => {
    if (props.query) {
      await props.searchMovie(props.query, props.currentPage)
    }
    else {
      props.getAllPlaying(1)
    }
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <>
      {props.error && <AlertPopup />}
      <SearchBar {...props} />
      <MovieList {...props} />
      <Pagination {...props} />
      <div className="return-btn" onClick={refreshList}>
        <i className="fa-solid fa-arrows-rotate" />
        Refresh list
      </div>
    </>
  )
}

const actions = {
  getAllPlaying,
  searchMovie
}

const mapToProps = ({ searchResults, error, query, currentPage }: ReduxState) => ({
  searchResults,
  error,
  query,
  currentPage
})

const connected = connect(mapToProps, actions)

export default connected(Home)
