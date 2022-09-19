import createStore from "redux-zero"
import { ReduxState } from "./types/ReduxState"

const initialState: ReduxState = {
  allPlaying: []
}

const store = createStore(initialState)

export default store
