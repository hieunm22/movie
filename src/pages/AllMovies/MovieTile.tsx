import { MovieTileProps } from "./MovieTile.types"
import "./MovieTile.scss"
import { formatNumber } from "../../common/helper"
import { useNavigate } from "react-router-dom"

const MovieTile = (props: MovieTileProps) => {
  const { movie } = props
  const backdropPath = process.env.REACT_APP_IMAGE_BASE_URL + movie.backdrop_path

  const navigate = useNavigate()
  const href = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <div
      className="movie-tile"
      onClick={href}
      title={movie.original_title}
      style={{ backgroundImage: `url(${backdropPath})` }}
    >
      <div className="title" title={movie.title}>
        {movie.title}
      </div>
      <div className="vote-container" title={`${movie.vote_count} votes`}>
        <i className="fa-solid fa-thumbs-up vote" />
        {" "}
        {formatNumber(movie.vote_count)}
      </div>
    </div>
  )
}

export default MovieTile
