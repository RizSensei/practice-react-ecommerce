import React from 'react'

const Admin = ({productsList}) => {
  return (
    <>
      <h1 className="text-center font-semibold">Item Inventory - ({productsList.length})</h1>
      <div className='p-2 px-10 '>
      {productsList?.map((product,index) => (
        <div key={product.id} className='flex border-2 py-1 px-2 justify-between'>
          <div className='flex w-1/2 space-x-5'>
            <span>{index + 1}</span>
            <img src={product.image} alt={product.title} className='h-12 w-12'/>
            <h1>{product.title}</h1>
          </div>
          <div>
            <h1>{product.category}</h1>
          </div>
          <div className='flex space-x-3'>
            <button className='text-blue-500'>Edit</button>
            <button className='text-red-500'>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Admin