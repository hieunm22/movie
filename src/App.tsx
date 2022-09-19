import "./App.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Page404 from "./pages/Page404/Page404"
import AllMovies from "./pages/AllMovies/AllMovies"
import MovieDetail from "./pages/MovieDetail/MovieDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllMovies />} />
        <Route path="/movie" element={<MovieDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
