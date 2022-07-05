import './App.css';
import { Home } from './pages/Home/Home';
import {Routes,Route } from "react-router-dom"
import { Catalog } from './pages/Catalog/Catalog';
import { MovieDescription } from './pages/MovieDescription/MovieDescription';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/movieDescription' element={<MovieDescription/>}/>


    </Routes>
    </>
  );
}

export default App;
