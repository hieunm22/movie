import createStore from "redux-zero"
import { ReduxState } from "./types/Redux"

const initialState: ReduxState = {
  allPlaying: [],
  detail: null,
  currentPage: 1
}

const store = createStore(initialState)

export default store
