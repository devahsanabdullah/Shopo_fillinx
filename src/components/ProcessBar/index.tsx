
import React from 'react'

const index = () => {
  return (
    <>
  {/* component */}
  <div className="w-full">
    <div className="flex">
      <div className="w-1/4">
        <div className="relative mb-2">
          <div className="w-7 h-7 mx-auto bg-[#0088f5] rounded-full text-lg text-white flex items-center">
            <span className="text-center text-[14px] text-white w-full">1</span>
          </div>
        </div>
        <div className="text-[12px]  text-center text-[#0088f5] ">Listing</div>
      </div>
      <div className="w-1/4">
        <div className="relative mb-2">
          <div
            className="absolute flex align-center items-center align-middle content-center"
            style={{
              width: "calc(100% - 2rem)",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="w-full h-0.05 bg-gray-200  items-center align-middle align-center ">
              <div
                className=" bg-[#0088f5] py-[1px] "
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w-7 h-7 mx-auto bg-[#0088f5] rounded-full text-lg text-white flex items-center">
            <span className="text-center text-[14px] text-white w-full">2</span>
          </div>
        </div>
        <div className="text-[12px]  text-[#0088f5] text-center ">Account</div>
      </div>
      <div className="w-1/4">
        <div className="relative mb-2">
          <div
            className="absolute flex align-center items-center align-middle content-center"
            style={{
              width: "calc(100% - 2rem )",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="w-full bg-gray-200  items-center align-middle align-center flex-1">
              <div
                className="w-0 bg-[#0088f5] py-[1px] "
                style={{ width: "33%" }}
              />
            </div>
          </div>
          <div className="w-7 h-7 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
            <span className="text-center text-[14px] text-gray-600 w-full">3</span>
          </div>
        </div>
        <div className="text-[12px]  text-center text-[#0088f5] ">Go Live</div>
      </div>
     
    </div>
  </div>
</>

  )
}

export default index
