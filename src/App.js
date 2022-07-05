import './App.css';
import { Home } from './pages/Home/Home';
import {Routes,Route } from "react-router-dom"
import { Catalog } from './pages/Catalog/Catalog';
import { MovieDescription } from './pages/MovieDescription/MovieDescription';

function App() {
  return (
    <>
    <Routes>
      <Route path='Home' element={<Home/>}/>
      <Route path='Catalog' element={<Catalog/>}/>
      <Route path='MovieDescription' element={<MovieDescription/>}/>


    </Routes>
    </>
  );
}

export default App;
