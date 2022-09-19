import createStore from "redux-zero"
import { ReduxState } from "./types/Redux"


const initialState: ReduxState = {
  allPlaying: [],
  detail: null
}

const store = createStore(initialState)

export default store
