import { BrowserRouter, Route, Routes } from "react-router";
import React,{ Suspense,useState } from "react";
// import Movies from "./pages/Movies";
import Header from "./components/Header/Header";
// import WishList from "./pages/WishList";
// import NotFound from "./pages/NotFound";
// import MovieDetails from "./pages/MovieDetails";
// import Register from "./pages/Register";
import LanguageContext from "./context/language";
import "./App.css";
const Movies = React.lazy(()=>import( "./pages/Movies"))
const WishList = React.lazy(()=>import( "./pages/WishList"))
const NotFound = React.lazy(()=>import( "./pages/NotFound"))
const MovieDetails = React.lazy(()=>import( "./pages/MovieDetails"))
const Register = React.lazy(()=>import( "./pages/Register"))

function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ lang, setLang }}>
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={lang === "ar" ? "text-right" : "tet-left"}
        >
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </div>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
