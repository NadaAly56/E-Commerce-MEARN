import NavBar from "../components/NavBar";
import ImageCarousel from "../components/imageCarousel";

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

            </div>
        </div>
    </div>
    </>
  )
}
