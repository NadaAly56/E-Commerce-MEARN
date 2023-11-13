import { Alert } from "react-bootstrap";

export default function Hero() {
  return (
    <>
      <Alert variant={"danger"}>
          This website is under development!!
        </Alert>
    <div className="hero">
        <div className="text-center">
          <p className="text">
            New Arrival
          </p>
          <img src="flower.avif" alt="flower"></img>
          <div className="d-flex align-items-center my-3 justify-content-center">
            <img src="left-arrow.webp" alt="left-arrow" width={70} height={20} />
            <p className="fs-4 fw-500 m-0 mx-3">Find The</p>
            <img src="right-arrow.webp" alt="right-arrow" width={90} height={20} />
          </div>
        <h1>PERFECT BAG</h1>
        <p className="text">for you</p>
        <button className="btn btn-dark">Shop now</button>
        </div>
        <div>
          <img src="hero.png" alt="hero" width={500} height={500} />
        </div>
    </div></>
  )
}
