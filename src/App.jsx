import { BrowserRouter, Route, Routes } from 'react-router'
import Movies from './pages/Movies'
import Header from './components/Header/Header'
import WishList from './pages/WishList'
import NotFound from './pages/NotFound'
import MovieDetails from './pages/MovieDetails'
import Register from './pages/Register'
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/movie-details/:id' element={<MovieDetails/>}/>
        <Route path='/wish-list' element={<WishList/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
