import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  return (
    <div className="category" id="shop">
        <img src="heart.webp" alt="heart"></img>
        <div className="d-flex align-items-center my-3 justify-content-center">
            <img src="decor-leaf-yellow-left.webp" alt="decor-leaf-yellow-left" width={70} height={20} />
            <p className="fs-1 fw-500 m-0 mx-3">Best Seller</p>
            <img src="decor-leaf-yellow-right.webp" alt="decor-leaf-yellow-right" width={90} height={20} />
          </div>
        <div className="row">
            <div className="col-12 col-md-3 cat-hover rounded-cyrcle">
        <ProductItem />
            </div>
            
        </div>
    </div>
  )
}
