import { MovieTileProps } from "./MovieTile.types"
import "./MovieTile.scss"
import { formatNumber } from "../../common/helper"
import { useNavigate } from "react-router-dom"
import notFound from "../../assets/not-found.jpg"
import styled from "styled-components"

interface TileProps {
  backdropPath: string
}

const Tile = styled.div`
  background-image: url(${(props: TileProps) => props.backdropPath});
  border: solid 1px gray;
  display: block;
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
  cursor: pointer;
  background-size: cover;
  border-radius: 5px;
  transition: all .15s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:hover > .vote-container {
    background-color: white;
  }
`

const MovieTile = (props: MovieTileProps) => {
  const { movie } = props
  const backdropPath =
    movie.backdrop_path ?? movie.poster_path
      ? process.env.REACT_APP_IMAGE_BASE_URL + (movie.backdrop_path ?? movie.poster_path)
      : notFound

  const navigate = useNavigate()
  const href = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <Tile
      backdropPath={backdropPath}
      onClick={href}
      title={movie.original_title}
      // style={{ backgroundImage: `url(${backdropPath})` }}
    >
      <div className="title" title={movie.title}>
        {movie.title}
      </div>
      <div className="vote-container" title={`${movie.vote_count} votes`}>
        <i className="fa-solid fa-thumbs-up vote" />
        {" "}
        {formatNumber(movie.vote_count)}
      </div>
    </Tile>
  )
}

export default MovieTile
