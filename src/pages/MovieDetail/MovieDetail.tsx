import { useEffect } from "react"
import { connect } from "redux-zero/react"
import { ReduxActions } from "../../types/ReduxActions"
import { ReduxState } from "../../types/ReduxState"
import { getMovieDetail } from "../actions"
import { MovieDetailProps } from "./MovieDetail.types"

const MovieDetail = (props: MovieDetailProps & ReduxActions) => {
  useEffect(() => {
    const wait = async () => {
      await props.getMovieDetail(props.movieId)
    }
    wait()
  }, [])

  return <>MovieDetail</>
}

const actions = {
  getMovieDetail
}

const mapToProps = ({ allPlaying }: ReduxState) => ({
  allPlaying
})

const connected = connect(mapToProps, actions)

export default connected(MovieDetail)
