import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="category" id="shop">
        <img src="heart.webp" alt="heart"></img>
        <div className="d-flex align-items-center my-3 justify-content-center">
            <img src="decor-leaf-yellow-left.webp" alt="decor-leaf-yellow-left" width={70} height={20} />
            <p className="fs-1 fw-500 m-0 mx-3">Discover Our Products</p>
            <img src="decor-leaf-yellow-right.webp" alt="decor-leaf-yellow-right" width={90} height={20} />
          </div>
        <div className="row">
            <div className="col cat-hover">
        <Link to={"/category"}>
                <div className="position-relative">
                <img className="cat-img" src="access.jpeg" alt="access" width='100%' height={300}/>
                <div className="border-cat"></div>
                <div className="category-label">Accessories</div>
                </div>
        </Link>
            </div>
            <div className="col cat-hover">
                <div className="position-relative">
                <img className="cat-img" src="croshet.jpeg" alt="access" width='100%' height={300}/>
                <div className="border-cat"></div>
                <div className="category-label">Croshet Bags</div>
                </div>
            </div>
            <div className="col cat-hover">
                <div className="position-relative">
                <img className="cat-img" src="flowers.jpeg" alt="access" width='100%' height={300}/>
                <div className="border-cat"></div>
                <div className="category-label">Flowers Frames</div>
                </div>
            </div>
            <div className="col cat-hover">
                <div className="position-relative">
                <img className="cat-img" src="bags.jpeg" alt="access" width='100%' height={300}/>
                <div className="border-cat"></div>
                <div className="category-label">Bags</div>
                </div>
            </div>
        </div>
    </div>
  )
}
