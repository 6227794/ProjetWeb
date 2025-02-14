import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddRecipePage from './pages/AddRecipePage';
import ConversionPage from './pages/ConversionPage';
import ErrorPage from './pages/ErrorPage';
import FAQPage from './pages/FAQPage';
import FavoritePage from './pages/FavoritePage';
import ProfilPage from './pages/ProfilPage';
import RecipeListPage from './pages/RecipeListPage';
import ViewRecipePage from './pages/ViewRecipePage';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/AddRecipe" element={<AddRecipePage/>}/>
          <Route path="/Conversion" element={<ConversionPage/>}/>
          <Route path="/FAQ" element={<FAQPage/>}/>
          <Route path="/FavoriteRecipe" element={<FavoritePage/>}/>
          <Route path="/Profil" element={<ProfilPage/>}/>
          <Route path="/RecipeList" element={<RecipeListPage/>}/>
          <Route path="/ViewRecipe" element={<ViewRecipePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      
        </Routes>

      </div>
    
    </BrowserRouter>


  )
}

export default App
