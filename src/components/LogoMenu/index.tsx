import React from 'react'

// import {HiOutlineMenuAlt1} from 'react-icons/hi'

 import {HorizontalLine} from '@/components/twin/index'
 import ShopingCartIcone,{MenuLeft} from '@/assest/Icone/Menu/index'
const index = () => {
  return (
    <div className='border-2 rounded-md shadow-md w-full h-full  '>
        <div className='flex items-center justify-between mx-3 mt-4'>
            {/* <HiOutlineMenuAlt1 className='text-black text-2xl' /> */}
            <MenuLeft />
            <button className=' border-[1px] border-black text-black px-3 py-[3px]'>Logo Here</button>
            {/* <HiShoppingBag className='text-black text-2xl'/> */}
            <ShopingCartIcone />
        </div>
        <div className='mt-4'>
  <HorizontalLine />
        </div>
    </div>
  )
}

export default index