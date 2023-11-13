import { Breadcrumb } from "react-bootstrap";

export default function CategoryHeader() {
  return (
    <div className="row header">
        <div className="col-8">
          <h1>Accessories</h1>
          <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>  
          <Breadcrumb.Item active>Accessories</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <img className="col-2" src="accessHeader.png" alt="access" width={200} height={300}/>
    </div>
  )
}
