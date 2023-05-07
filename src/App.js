import { Route, Routes } from "react-router-dom";
import AllCategories from "./components/Categories/AllCategories";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllProducts from "./components/products/ProductHome";
import Search from "./components/search/Search";
import ShopNow from "./components/shopNow/ShopNow";
import Auth from './routes/auth/Auth'
import Register from "./routes/auth/register/Register";
import Login from "./routes/auth/login/Login"
import Home from "./routes/home/Home";
import Category from "./routes/category/Category";
import Get from "./components/getYourThing/Get";
import Product from "./routes/auth/product/Product";



function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />}>
          <Route path='/auth/login' element={<Login />}></Route>
          <Route path='/auth/register' element={<Register />}></Route>
        </Route>
        <Route path='/auth/category/:id' element={<Category />}></Route>
        <Route path='/auth/product' element={<Product />}></Route>
      </Routes>

      <Search />
      <ShopNow />
      <AllCategories />
      <AllProducts />
      <Get/>
      <Footer />
    </div>
  )
}

export default App;
