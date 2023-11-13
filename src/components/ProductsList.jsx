import ProductItem from "./ProductItem";

export default function ProductsList() {
  return (
    <div className="products-list">
      <div className="row">
        <div className="col-md-3">
          <div className="border-end border-secondary p-3">
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                Filters</p>
          <div className="row m-0 mt-3 py-2">
                            <div className="col-12">Price</div>
                            <div className="col-12 py-2">
                                <div className="row">
                                <p className="col-6 m-0 dark-gray-small">Min price $0</p>
                                <p className="col-6 m-0 px-0 dark-gray-small ">Max price $500</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <input type="range" className="orange" />
                            </div>
                        </div>
                        <div className="row m-0 mt-3 py-2">
                          <p>Type</p>
                          <div className="d-flex align-items-center justify-content-start">
                          <input className="mr-3" type="checkbox" name="type" />
                          <p className="m-0 ml-3">Bracelet</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                          <input className="mr-3" type="checkbox" name="type" />
                          <p className="m-0 ml-3">Chain</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                          <input className="mr-3" type="checkbox" name="type" />
                          <p className="m-0 ml-3">ٌRing</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                          <input className="mr-3" type="checkbox" name="type" />
                          <p className="m-0 ml-3">Medal</p>
                          </div>
                        </div>
          </div>
        </div>
        <div className="col">
        <div className="row">
      {
        Array.from({length:12}, (_, index) => (
          <ProductItem key={index} />
        ))
      }
    </div>
        </div>
      </div>
    
    </div>
  )
}
