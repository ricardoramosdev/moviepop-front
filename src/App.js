import './App.css';
import { Home } from './pages/Home/Home';
import {Routes,Route } from "react-router-dom"
import { Catalog } from './pages/Catalog/Catalog';
import { MovieDescription } from './pages/MovieDescription/MovieDescription';
import {Login} from './pages/Login/Login'
import { AuthProvider } from './auth/AuthProvider';
import { Favorites } from './pages/Favorites/Favorites';
function App() {
  return (
    <>
    <AuthProvider>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path=':movieID' element={<MovieDescription/>}/>
      <Route path='/favorites' element={<Favorites/>}/>



    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
