import React from 'react'
// import Menu from '@/components/Menu/index'

const Info = () => {
  return (
    <div className="w-full flex justify-between !items-start ">
      <div className=" sticky top-0  z-[1000] ">
        {/* <WidgetsSection /> */}
      </div>

      <div
        className={` bg-secondary-light w-full border-t border-t-secondary-dark max-w-full mx-auto
    ${false? 'w-calc' : 'w-full'}
    transition-all duration-500 ease-in-out`}
      >
        <div className="  max-w-full mx-auto  my-20 overflow-y-auto">
          <div className={`shadow-lg py-6 w-[360px] mx-auto  bg-white my-5`}>
            {/* <div className="flex "><Menu /> </div> */}
          </div>
        </div>
      </div>
      <div
        className={`${
          false? 'w-[450px]' : 'w-[10px]'
        } transition-all duration-500 ease-in-out  sticky top-0`}
      >
        <div className=" w-full bg-secondary-light transform transition ease-in-out duration-500 ">
          {/* <EditSideBar /> */}
        </div>
      </div>
    </div>
  )
}

export default Info
