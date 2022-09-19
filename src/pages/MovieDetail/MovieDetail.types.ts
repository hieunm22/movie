export interface MovieDetailProps {
  movieId: number
  adult: boolean
  backdrop_path: string
  belongs_to_collection: boolean | null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: any[]
  production_countries: any[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: any[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: string
  vote_count: string
}

export interface Genre {
  id: number
  name: string
}
