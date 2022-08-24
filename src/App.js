import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Container from "./components/containers/Container.jsx";
import LandingPage from "./components/pages/homepages/LandingPage";
import Category from "./components/pages/homepages/Category";
import ProductPage from "./components/pages/homepages/ProductPage.jsx";
import Cart from "./components/pages/homepages/Cart";
import NotFound from "./components/ui/organisms/NotFound";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* content routing is done here */}
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<LandingPage />} />
            <Route path="/category/:categoryid" element={<Category />} />
            <Route path="/product/:productid" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
