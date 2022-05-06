import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Category } from "@mui/icons-material";

import Categories from "./layout/Categories";
import Products from "./pages/Products";
import SideBar from "./layout/SideBar";
import Home from "./pages/Home";

import Category from "./components/Category";
import Header from "./layout/Header";
import CategorybyID from "./components/CategorybyID";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />}>
              <Route index element={<Category />} />
              <Route path=":idUser" element={<CategorybyID />} />
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
