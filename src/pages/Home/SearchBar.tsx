import { ChangeEvent } from "react"
import { connect } from "redux-zero/react"
import { delay } from "../../common/helper"
import { ReduxState } from "../../types/Redux"
import { searchMovie } from "../actions"
import { getAllPlaying } from "../API"
import { HomeProps } from "./Home.types"

const SearchBar = (props: HomeProps) => {
  const searchChanged = delay(async (target: HTMLInputElement) => {
    if (target.value) {
      props.searchMovie(target.value, 1)
    }
    else {
      props.getAllPlaying(1)
    }
  }, 1000)

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    searchChanged(e.target)
  }

  return (
    <div className="search-container flex">
      <div className="search-label flex">Search</div>
      <input className="search-input" type="text" onChange={onSearch} />
    </div>
  )
}

const actions = {
  getAllPlaying,
  searchMovie
}

const mapToProps = ({ searchResults, currentPage }: ReduxState) => ({
  searchResults,
  currentPage
})

const connected = connect(mapToProps, actions)

export default connected(SearchBar)