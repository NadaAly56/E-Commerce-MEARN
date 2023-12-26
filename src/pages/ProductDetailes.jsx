import NavBar from "../components/reusable/NavBar";
import ImageCarousel from "../components/imageCarousel";
import ProductDetailesSide from "../components/ProductDetailesSide";

export default function ProductDetailes() {
  return (
    <>
    <NavBar src="../brand.png" />
    <div className='container'>
        <div className="row my-4">
            <div className="col-12 col-md-6">
                <ImageCarousel />
            </div>
            <div className="col-12 col-md-6">
                <ProductDetailesSide />
            </div>
        </div>
    </div>
    </>
  )
}
