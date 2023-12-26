import React from 'react'
import CartBox from '../components/cartBox'
import NavBar from '../components/reusable/NavBar'

export default function CheckOut() {
  return (
    <>
    <NavBar src='../brand.png' />
    <div className='container my-5'>
        <CartBox />
        <div className="row w-50 justify-content-end ms-auto my-4">
          <div className="col-6 text-end">
            <button className='btn btn-dark p-3 rounded-4'>Continue Shopping</button>
          </div>
          <div className="col-3 text-end">
            <button className='btn btn-dark p-3 rounded-4'>Clear Cart</button>
          </div>
        </div>
    </div>
    </>
  )
}
