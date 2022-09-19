import "./App.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Page404 from "./pages/Page404/Page404"
import MovieDetail from "./pages/MovieDetail/MovieDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
