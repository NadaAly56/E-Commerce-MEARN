import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import CategoryPage from "./pages/CategoryPage"
import Signin from "./pages/Signin"
import ProductDetailes from "./pages/ProductDetailes"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetailes />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
