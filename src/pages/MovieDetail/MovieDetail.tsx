import { useEffect } from "react"
import { connect } from "redux-zero/react"
import { ReduxActions, ReduxState } from "../../types/Redux"
import { Genre, MovieDetailProps } from "./MovieDetail.types"
import { getMovieDetail } from "../actions"
import { Link, useParams } from "react-router-dom"
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen"
import { formatNumber } from "../../common/helper"
import "./MovieDetail.scss"

const MovieDetail = (props: MovieDetailProps & ReduxState & ReduxActions) => {
  const params = useParams()
  useEffect(() => {
    const wait = async () => {
      const idString = params.id
      const id = Number(idString)
      await props.getMovieDetail(id)
    }
    wait()
  }, [])

  if (!props.detail) {
    return <LoadingScreen />
  }

  const detail = props.detail

  return (
    <div className="movie-detail">
      <div className="title">{detail.title}</div>
      <div className="budget">Budget: ${formatNumber(detail.budget)}</div>
      <div className="revenue">Revenue: ${formatNumber(detail.revenue)}</div>
      <div className="genre">Genre:</div>
      <div className="genre">
        {detail.genres.map((genre: Genre) => {
          return (<div className="genre" key={genre.id}>+ {genre.name}</div>)
        })}
      </div>
      <div className="release-date">Release date: {detail.release_date}</div>
      <div className="backdrop">
        {detail.homepage ? 
          <a href={detail.homepage}>
            <img
              src={process.env.REACT_APP_IMAGE_BASE_URL + detail.backdrop_path}
              alt={detail.original_title}
            />
          </a>
          : <img
            src={process.env.REACT_APP_IMAGE_BASE_URL + detail.backdrop_path}
            alt={detail.original_title}
          />
        }
      </div>
      <div className="actions">
        <Link className="return-btn" to="/">
          <i className="fa-solid fa-arrow-left" />
          Back to movie lists
        </Link>
      </div>
    </div>
  )
}

const actions = {
  getMovieDetail
}

const mapToProps = ({ detail }: ReduxState) => ({
  detail
})

const connected = connect(mapToProps, actions)

export default connected(MovieDetail)
