import React from 'react'
import { Implants, Veneers, Treatment } from '../../components'
function index() {
  return (
    <div className='container my-4'>
      <h1 className='text-center'>Price List</h1>
        <div className='w-100 d-flex justify-content-center mb-4'>
          <hr className='d-flex w-25'/>
        </div>
        <div className='row my-4'>
          <div className="col-sm-6 col-12">
            <Implants />
            <Veneers />
          </div>
          <div className="col-sm-6 col-12">
            <Treatment />
          </div>
        
</div>
       
    </div>
  )
}

export default index
