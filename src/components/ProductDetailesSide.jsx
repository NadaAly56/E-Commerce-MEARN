import React from 'react'
import ModalPopUp from './reusable/ModalPopUp'
import { useNavigate } from 'react-router-dom'

export default function ProductDetailesSide() {
    const navigate = useNavigate()
  return (
    <div className='px-3 py-5 text-end'>
        <h1>Pearl bracelet | سوار لؤلؤ </h1>
        <h4 className='mt-4 mb-5'>100.00 EGP</h4>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam deserunt labore vitae facilis ea iste exercitationem harum voluptates laborum soluta itaque sequi ipsam, dolores perferendis vero non eius cum voluptate quia temporibus corrupti recusandae aperiam. Ullam perspiciatis corporis numquam accusamus officiis, rem adipisci quae suscipit, neque velit maiores laudantium.

        </p>
        <ModalPopUp btnText='Add to cart'
        btnStyle='btn btn-dark mx-auto w-100 py-2'
        close='close' title='Congrat'
        save='Go to cart'
        desc='Added to cart successfully 🎉'
        action={()=>{
            navigate('/product/cart')
        }}
         />    </div>
  )
}
