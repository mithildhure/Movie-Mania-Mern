import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import AddMovie from "./components/AddMovie"
import ShowMovie from "./components/ShowMovie"
import EditMovie from "./components/EditMovie"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addMovie" element={<AddMovie/>}/>
        <Route path="/showMovie/:id" element={<ShowMovie/>}/>
        <Route path="/edit/:id" element={<EditMovie/>}/>
      </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
