import { useEffect } from "react";
import CategoryHeader from "../components/CategoryHeader";
import NavBar from "../components/reusable/NavBar";
import ProductsList from "../components/ProductsList";

export default function CategoryPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <NavBar />
    <CategoryHeader />
    <ProductsList />
    </>
  )
}
