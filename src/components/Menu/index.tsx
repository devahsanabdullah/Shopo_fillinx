import React from 'react'
// import {CgIfDesign} from 'react-icons/cg'
// import {HiOutlineMenuAlt2} from 'react-icons/hi'
// import {BsDropletHalf} from 'react-icons/bs'
import {HorizontalLine} from '@/components/twin/index'
import {BLockIconeBtn} from '@/assest/Icone/Menu/index'
const index = () => {
  return (
    <div className='border-2 rounded-md shadow-md w-full h-full  '>
        <div className='flex justify-around items-center mt-6'>
            <div>
        <button className='bg-black text-white ml-2 flex justify-center items-center rounded-md px-4 py-1'><BLockIconeBtn />Blocks</button>
        </div>
        <div className="h-7 flex items-center">
  <div className="h-full border-l-2 border-gray-500"></div>
</div>
<div>
        <button className='bg-[#cbe6fc] text-black ml-2 flex justify-center items-center rounded-md px-3 py-1'> <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.973"
      height="16.33"
      viewBox="0 0 22.973 16.33"
      className='h-3 w-4 mr-2'
    >
      <g data-name="Group 18001" transform="translate(-1874 -4044.072)">
        <path
          d="M32.973 141.674a1.524 1.524 0 01-1.641 1.374H11.641A1.524 1.524 0 0110 141.674a1.524 1.524 0 011.641-1.374h19.691a1.526 1.526 0 011.641 1.374z"
          data-name="Path 21296"
          transform="translate(1864 3903.772)"
        ></path>
        <path
          d="M26.489 431.374a1.524 1.524 0 01-1.641 1.374H11.641A1.524 1.524 0 0110 431.374 1.524 1.524 0 0111.641 430h13.2a1.526 1.526 0 011.643 1.374z"
          data-name="Path 21297"
          transform="translate(1864 3620.863)"
        ></path>
        <path
          d="M21.566 721.074a1.524 1.524 0 01-1.641 1.374h-8.284A1.524 1.524 0 0110 721.074a1.524 1.524 0 011.641-1.374h8.284a1.527 1.527 0 011.641 1.374z"
          data-name="Path 21298"
          transform="translate(1864 3337.954)"
        ></path>
      </g>
    </svg>Menu</button></div>
        <div className="h-7 flex items-center">
  <div className="h-full border-l-2 border-gray-500"></div>
</div>
<div>
        <button className='bg-[#fff1cc] text-black ml-2 flex justify-center items-center rounded-md px-3 py-1'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.025"
      height="20"
      viewBox="0 0 15.025 20"
      className='w-4 h-[14px] mr-2'
    >
      <g
        data-name="2080ece8bec60bd11b30101b135f8e49"
        transform="translate(-131.887 -10)"
      >
        <g data-name="Group 16724" transform="translate(131.887 10)">
          <path
            d="M136.3-497.905c-1.687 2.255-3.148 4.212-3.241 4.357a9.449 9.449 0 00-.8 1.687 7.522 7.522 0 002.306 8.1 7.506 7.506 0 009.67 0 7.515 7.515 0 002.3-8.1 9.2 9.2 0 00-.8-1.687c-.255-.383-6.3-8.452-6.338-8.452-.014 0-1.407 1.844-3.097 4.095zm5.723 1.464c1.429 1.907 2.674 3.6 2.768 3.758a6.316 6.316 0 01.759 2.016 7.489 7.489 0 01.02 2.231 6.291 6.291 0 01-4.365 4.913 5.108 5.108 0 01-1.809.251 5.08 5.08 0 01-1.163-.086 6.3 6.3 0 01-4.991-4.992 7.214 7.214 0 010-2.321 6.463 6.463 0 01.795-2.079c.208-.337 5.328-7.18 5.367-7.164.015.005 1.196 1.567 2.622 3.473z"
            data-name="Path 21307"
            transform="translate(-131.887 502)"
          ></path>
          <path
            d="M253.908 110.286a5.1 5.1 0 004.017 4.561 6.308 6.308 0 001.957 0 5.1 5.1 0 004.017-4.561l.027-.356H253.88z"
            data-name="Path 21308"
            transform="translate(-251.39 -97.442)"
          ></path>
        </g>
      </g>
    </svg>Colors</button>
        </div>
    </div>
    <div className='m-4'>
    <HorizontalLine />
    </div>
    </div>
  )
}

export default index