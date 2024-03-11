import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import RecipesPage from "./components/RecipesPage";
import RecipePage from "./components/RecipePage"; // Обратите внимание на изменение имени файла
import NotFound from "./components/NotFound";
import ScrollToTop from './scrollToTop'
import AboutPage from "./components/AboutPage";


function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Routes >
        <Route path="/algoritmika-vkusodel/" element={<Main />} />
        <Route path="/algoritmika-vkusodel/recipes" element={<RecipesPage />} />
        <Route path="algoritmika-vkusodel/recipes/:link" element={<RecipePage />} />
        <Route path="algoritmika-vkusodel/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
