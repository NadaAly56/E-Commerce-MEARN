import React from 'react'

export default function CartBox() {
  return (
    <div className='row check-out-box justify-content-center align-items-center'>
      <div className="col-3">
      <img src="accessHeader.jpeg" alt="access" width="100%" height={300} />
      </div>
      <div className="col-5">
      <p className="fs-6 my-3">Pearl bracelet | سوار لؤلؤ </p>
      <p>100 EGP</p>
      </div>
      <div className="col-3">
        + 1 -
      </div>
      <div className="col-1">
        x
      </div>
    </div>
  )
}
