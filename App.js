import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;

//! npm i react-paginate
//?  npm i react-icons
//*  npm i react-slick slick-carousel
//?$ npm i -D tailwindscss and to create tailwindcss page npx tailwindcss init
//TODO : TAILWINDCSS SAYFASINA GIT ORDA HERSEY VAR
//! autoplay: true. Bunu sliderin ozelligine verdigimizde slider otomatik kayar
