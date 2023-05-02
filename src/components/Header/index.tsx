import React,{useState} from 'react' 
import {HorizontalLine} from '@/components/twin/index'
// import {TbTriangleSquareCircle} from 'react-icons/tb'
// import {AiFillMessage} from 'react-icons/ai'
// import {TbChartBar} from 'react-icons/tb'
// import {GiInternalOrgan} from 'react-icons/gi'
// import {RiFolderSettingsFill} from 'react-icons/ri'
// import {FiSettings} from 'react-icons/fi'
const index = () => {
  const [isActive, setIsActive] = useState(true);
  const handleMouseEnter = () => {
    setIsActive(true);
  };
  return <>
  <div className='flex flex-col justify-between  shadow-sm   h-screen bg-white z-10 w-24'>
    <div className='p-3'>
  {/* <h1 className='bg-black text-white p-2 mt-6 mx-2  mb-2 w-13 h-11 rounded-md'></h1> */}
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      className='  p-2 mt-3 mx-2  mb-2  '
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            width="56"
            height="56"
            fill="#aeaeb2"
            
            data-name="Rectangle 4010"
            rx="12"
            transform="translate(176.014 153.014)"
          ></rect>
        </clipPath>
      </defs>
      <g data-name="Group 18006" transform="translate(-42 -52)">
        <rect
          width="58"
          height="58"
          data-name="Rectangle 4002"
          rx="12"
          transform="translate(42 52)"
        ></rect>
        <g
          clipPath="url(#clip-path)"
          data-name="Mask Group 54"
          transform="translate(-133.014 -100.014)"
        >
          <image
            width="71.186"
            height="71.186"
            data-name="Image 39"
            transform="translate(168.421 145.421)"
            xlinkHref="data:image/png;base64,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"
          ></image>
        </g>
      </g>
    </svg>
  <HorizontalLine />
  </div>
  <div className='flex justify-between flex-col'>
    <div onClick={handleMouseEnter} className={isActive?'border-l-4 text-black border-black':'group  hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'}>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className={isActive?"bg-black rounded-full p-2  mt-2 flex justify-center":'group-hover:bg-black group-hover:rounded-full p-2  mt-2 flex justify-center'}>
    {/* <TbTriangleSquareCircle className='group-hover:text-white text-xl'/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.088"
      height="27.169"
      viewBox="0 0 29.088 27.169"
      fill="#929191"
            className={isActive?'fill-white  w-5 h-5':'group-hover:fill-white  w-5 h-5'}
    >
      <path
       fill="#929191"
       className={isActive?'fill-white  w-5 h-5':'group-hover:fill-white  w-5 h-5'}
       
        strokeWidth="0.5"
        d="M27.613 12.716a9.442 9.442 0 00-3.562-3.59 9.528 9.528 0 00-8.538-.476L11.091.734a.955.955 0 00-1.664 0l-9.05 16.2a.953.953 0 00.836 1.416h8.62a9.526 9.526 0 1017.78-5.634zM10.258 3.15l7.426 13.3H2.833zm15.666 18.041a7.644 7.644 0 01-6.61 3.83 7.665 7.665 0 01-3.8-1.01 7.641 7.641 0 01-3.765-5.661h7.57a.953.953 0 00.832-1.418l-.006.006-3.69-6.6a7.5 7.5 0 012.853-.558 7.665 7.665 0 013.8 1.01 7.644 7.644 0 013.83 6.61 7.665 7.665 0 01-1.014 3.791z"
      ></path>
    </svg>
    </div>
    <h3 className={isActive?'text-black text-[11px]':'group-hover:text-black text-[11px]'}>Design</h3>
    </div>
    </div>
    <div className='group hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className='group-hover:bg-black group-hover:rounded-full  p-2 mt-2 flex justify-center'>
    {/* <AiFillMessage className='group-hover:text-white text-xl'/> */}
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.143"
      height="22.53"
      viewBox="0 0 24.143 22.53"
        className='group-hover:fill-white  w-5 h-5'
    >
      <g data-name="Group 17973">
        <path
          fill="#929191"
            className='group-hover:fill-white  w-5 h-5'
          d="M24.143 13.562c0 5.833-5.4 10.562-12.071 10.562a13.671 13.671 0 01-3.541-.462 22.035 22.035 0 01-6.309 1.862.392.392 0 01-.412-.546A16.085 16.085 0 002.971 20.5 9.812 9.812 0 010 13.562C0 7.729 5.4 3 12.071 3s12.072 4.729 12.072 10.562zm-16.6 0a1.509 1.509 0 10-1.509 1.509 1.509 1.509 0 001.511-1.509zm6.036 0a1.509 1.509 0 10-1.509 1.509 1.509 1.509 0 001.51-1.509zm4.527 1.509a1.509 1.509 0 10-1.506-1.509 1.509 1.509 0 001.507 1.509z"
          data-name="Path 23086"
          transform="translate(0 -3)"
        ></path>
      </g>
    </svg>
    </div>
    <p className='group-hover:text-black text-[12px]'>Messages</p>
    </div>
    </div>
    <div className='group hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className='group-hover:bg-black group-hover:rounded-full  p-2 mt-2 flex justify-center'>
    {/* <TbChartBar className='group-hover:text-white text-xl'/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.745"
      height="25.916"
      data-name="Group 18078"
      viewBox="0 0 30.745 25.916"
       className='group-hover:fill-white  w-5 h-5'
    >
      <defs>
        <clipPath id="clip-path">
          <path
            fill="#929191"
            d="M0 0H30.745V25.915H0z"
            data-name="Rectangle 4038"
             className='group-hover:fill-white  w-5 h-5'
          ></path>
        </clipPath>
      </defs>
      <g fill="#929191" clipPath="url(#clip-path)"  className='group-hover:fill-white  w-5 h-5' data-name="Group 18077">
        <path
          d="M0 11.24c.06-.226.1-.457.183-.676a2.869 2.869 0 014.244-1.459c.127.079.257.213.385.212s.243-.145.363-.228l3.2-2.231a.181.181 0 00.093-.238 2.88 2.88 0 012.342-3.71 2.829 2.829 0 013.143 2.078 8.353 8.353 0 01.158.878.217.217 0 00.171.2q1.343.45 2.682.915a.2.2 0 00.236-.051 6.279 6.279 0 01.8-.7 2.76 2.76 0 013.025-.043c.412.23.4.249.783-.01q1.553-1.062 3.1-2.129c.239-.164.24-.167.167-.457a2.86 2.86 0 01-.044-1.227 2.876 2.876 0 015.65-.056c.018.091.041.18.062.271v.565a7.254 7.254 0 01-.255.867 2.86 2.86 0 01-4.17 1.289c-.115-.072-.227-.148-.342-.223a.2.2 0 00-.044.017l-3.273 2.287c-.009.006-.016.014-.025.019a.588.588 0 00-.29.672 3.133 3.133 0 01-.155 1.679 2.894 2.894 0 01-3.04 1.737 2.819 2.819 0 01-2.426-2.294 16.71 16.71 0 01-.1-.666.193.193 0 00-.147-.188q-1.357-.457-2.71-.929a.174.174 0 00-.218.048c-.108.12-.226.232-.343.345a2.839 2.839 0 01-3.57.359c-.306-.2-.308-.2-.6.005l-3.3 2.287a.206.206 0 00-.1.27 2.908 2.908 0 01-2.266 3.638A2.907 2.907 0 01.224 12.6 6.989 6.989 0 010 11.805v-.565m20.927-2.6a1.372 1.372 0 00-1.457-1.424 1.445 1.445 0 00-1.37 1.421 1.489 1.489 0 001.343 1.442 1.379 1.379 0 001.481-1.438M2.88 12.973a1.568 1.568 0 001.449-1.426 1.549 1.549 0 00-1.467-1.466 1.566 1.566 0 00-1.427 1.447 1.561 1.561 0 001.445 1.445m8.294-5.8a1.406 1.406 0 001.468-1.4 1.446 1.446 0 00-1.473-1.431 1.406 1.406 0 00-1.383 1.42 1.385 1.385 0 001.387 1.407M27.865 1.44a1.548 1.548 0 00-1.449 1.42 1.545 1.545 0 001.433 1.454A1.5 1.5 0 0029.3 2.892a1.5 1.5 0 00-1.435-1.452"
          data-name="Path 23115"
        ></path>
        <path
          d="M.367 415.01c.008-.093.02-.186.023-.279a.859.859 0 01.868-.879c1.306-.007 2.613 0 3.92.006a.821.821 0 01.9.823c0 2.305-.007 4.611 0 6.916a.842.842 0 01-.81.82c-1.348-.009-2.7 0-4.045-.007a.758.758 0 01-.8-.783c-.022-.758-.028-1.515-.042-2.273 0-.088-.012-.176-.018-.264v-4.08"
          data-name="Path 23116"
          transform="translate(-.352 -396.537)"
        ></path>
        <path
          d="M603.788 215.45v6.822c0 .386-.019.773-.047 1.159a.717.717 0 01-.562.578c-.385.032-.772.046-1.158.047-1.014 0-2.028-.011-3.042-.014a.807.807 0 01-.654-.275.616.616 0 01-.18-.4c-.014-.617-.046-1.233-.047-1.849q-.01-6.854-.011-13.708a.962.962 0 01.163-.606.915.915 0 01.8-.386c.795 0 1.589-.005 2.384 0q.792 0 1.583.032a.742.742 0 01.746.73c.02.318.029.637.029.956v6.917"
          data-name="Path 23117"
          transform="translate(-573.067 -198.164)"
        ></path>
        <path
          d="M205.611 283.091v6.275a.912.912 0 01-.748.872c-.436.041-.876.04-1.315.038-.92 0-1.84-.037-2.76-.029-.468 0-.685-.3-.9-.624a.274.274 0 01-.015-.137q0-5.561.008-11.122c0-.554.045-1.107.05-1.661a.811.811 0 01.8-.795c1.333 0 2.666-.01 4 0a.987.987 0 01.867.65.388.388 0 01.014.169v6.369"
          data-name="Path 23118"
          transform="translate(-191.512 -264.361)"
        ></path>
        <path
          d="M404.548 350.4v4.924a.937.937 0 01-.631.754c-.426.039-.855.056-1.283.06-.93.009-1.861.012-2.791 0a1.278 1.278 0 01-.554-.128.82.82 0 01-.45-.784c0-.523-.025-1.045-.024-1.568q.008-4.007.022-8.014a.869.869 0 01.4-.831.917.917 0 01.418-.148c.977-.015 1.954-.015 2.931-.012.407 0 .814.024 1.222.035a.587.587 0 01.414.193 1.025 1.025 0 01.337.783c-.019 1.578-.009 3.157-.009 4.736"
          data-name="Path 23119"
          transform="translate(-382.133 -330.232)"
        ></path>
      </g>
    </svg>
    </div>
    <p className='group-hover:text-black text-[11px]'>Analytics</p>
    </div>
    </div>
    <div className='group hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className='group-hover:bg-black group-hover:rounded-full  p-2 mt-2 flex justify-center'>
    {/* <img className='group-hover:text-white w-5 h-5' src={'/assist/integration.svg'} alt="" /> */}
    {/* <GiInternalOrgan className='group-hover:text-white text-xl'/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.363"
      height="29.109"
      viewBox="0 0 31.363 29.109"
      className='group-hover:fill-white-white  w-5 h-5'
    >
      <path
        fill="#929191"
        className='group-hover:fill-white w-5 h-5'
        d="M48.349 25.029a3.7 3.7 0 00-3.688 3.688 4.037 4.037 0 00.1.831l-3.481 2.286a5.9 5.9 0 00-4.468-2.078A5.771 5.771 0 0033.232 31l-5.714-3.948a3.449 3.449 0 10-2.026 2.338l5.87 4.1a5.491 5.491 0 00-.416 2.078 9.272 9.272 0 00.1 1.195l-3.584 1.3a3.86 3.86 0 10.831 3.584 2.607 2.607 0 00.1-.623l4.1-1.455a5.892 5.892 0 004.26 1.87h.468l.571 2.909a4.25 4.25 0 00-1.558 3.74 4.332 4.332 0 104.623-4.727l-.612-3.061a5.875 5.875 0 002.442-4.727c0-.312-.052-.623-.052-.883l4.1-2.7a3.748 3.748 0 001.662.416 3.7 3.7 0 003.688-3.688 3.782 3.782 0 00-3.736-3.689zM36.816 39.366a3.74 3.74 0 113.74-3.74 3.725 3.725 0 01-3.74 3.74z"
        data-name="Path 23087"
        transform="translate(-20.725 -22.898)"
      ></path>
      <circle
        cx="1.662"
        cy="1.662"
        r="1.662"
        fill="#929191"
        data-name="Ellipse 258"
        transform="translate(14.48 11.066)"
      ></circle>
    </svg>
    </div>
    <p className='group-hover:text-black text-[11px]'>Integration</p>
    </div>
    </div>
    <div className='group hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className='group-hover:bg-black group-hover:rounded-full  p-2 mt-2 flex justify-center'>
    {/* <RiFolderSettingsFill className='group-hover:text-white text-xl'/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.289"
      height="31.289"
      viewBox="0 0 31.289 31.289"
        className='group-hover:fill-white w-5 h-5'
    >
      <path
        fill="#929191"
          className='group-hover:fill-white w-5 h-5'
        d="M121.538 23.495h-6.851l-.88-1.362a1.31 1.31 0 00-1.095-.593h-2.907a1.307 1.307 0 00-1.3 1.3v9.778a1.307 1.307 0 001.3 1.3h7.552l-5.187 5.187-.24-.24a.947.947 0 00-.678-.287.962.962 0 00-.685.287l-.757.756-.658-.274v-1.199a.963.963 0 00-.965-.965h-1.982a.963.963 0 00-.965.965v1.206l-.658.274-.756-.756a.962.962 0 00-.685-.287.946.946 0 00-.678.287l-.238.238-5.185-5.185h7.548a1.307 1.307 0 001.3-1.3V24.8a1.307 1.307 0 00-1.3-1.3H97.74l-.88-1.362a1.31 1.31 0 00-1.095-.593h-2.907a1.307 1.307 0 00-1.3 1.3v9.778a1.307 1.307 0 001.3 1.3H95.2l6.107 6.107-.242.242a.947.947 0 00-.287.678.962.962 0 00.287.685l.75.75c-.124.28-.215.5-.287.665h-1.186a.963.963 0 00-.965.965V46a.963.963 0 00.965.965h1.206l.274.658-.756.756a.952.952 0 000 1.362l1.4 1.4a.96.96 0 001.362 0l.756-.756.658.274v1.206a.963.963 0 00.965.965h1.982a.963.963 0 00.965-.965v-1.208l.658-.274.756.763a.966.966 0 001.362-.007l1.4-1.4a.952.952 0 000-1.362l-.756-.756.274-.658h1.206a.963.963 0 00.965-.965v-1.983a.963.963 0 00-.965-.965h-1.204l-.274-.658.763-.756a.984.984 0 00.28-.685.946.946 0 00-.287-.678l-.24-.24 6.109-6.109h2.338a1.307 1.307 0 001.3-1.3V24.8a1.307 1.307 0 00-1.3-1.3zM107.2 48.415a3.409 3.409 0 113.409-3.409 3.416 3.416 0 01-3.409 3.409z"
        data-name="Path 23089"
        transform="translate(-91.554 -21.539)"
      ></path>
    </svg>
    </div>
    <p className='group-hover:text-black text-[11px]'>Automation</p>
    </div>
    </div>
    <div className='group hover:border-l-4 border-transparent border-l-4 hover:text-black hover:border-black'>
    <div className='flex flex-col items-center text-gray-500 '>
    <div className='group-hover:bg-black group-hover:rounded-full  p-2 mt-2 flex justify-center'>
    {/* <FiSettings className='group-hover:text-white text-xl'/> */}
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.332"
      height="29.333"
      viewBox="0 0 29.332 29.333"
      className='group-hover:fill-white w-5 h-5'
    >
      <path
        fill="#929191"
        className='group-hover:fill-white w-5 h-5'
        d="M154.289 68.016h-1.463a.275.275 0 01-.259-.217 12.169 12.169 0 00-1.448-3.5.292.292 0 01.034-.362l1.025-1.025a1.048 1.048 0 000-1.474l-2.278-2.279a1.045 1.045 0 00-1.474 0l-1.029 1.029a.291.291 0 01-.358.03 12.17 12.17 0 00-3.5-1.448.275.275 0 01-.217-.259v-1.462a1.045 1.045 0 00-1.044-1.044h-3.223a1.045 1.045 0 00-1.044 1.044v1.463a.271.271 0 01-.217.259 12.08 12.08 0 00-3.5 1.448.292.292 0 01-.362-.034l-1.025-1.025a1.048 1.048 0 00-1.474 0l-2.282 2.282a1.048 1.048 0 000 1.474l1.025 1.025a.292.292 0 01.034.362 12.169 12.169 0 00-1.448 3.5.274.274 0 01-.259.217h-1.463a1.046 1.046 0 00-1.04 1.04v3.223a1.045 1.045 0 001.044 1.044h1.456a.294.294 0 01.278.232 12.114 12.114 0 001.516 3.6c.015.027.034.053.05.08l-1.185 1.185a1.048 1.048 0 000 1.474l2.282 2.282a1.048 1.048 0 001.474 0l1.025-1.025a.292.292 0 01.358-.034 12.157 12.157 0 003.5 1.444.271.271 0 01.217.259v1.466a1.045 1.045 0 001.044 1.044h3.223a1.045 1.045 0 001.044-1.044v-1.459a.275.275 0 01.217-.259 12.17 12.17 0 003.5-1.448.292.292 0 01.362.034l1.025 1.025a1.048 1.048 0 001.474 0l2.282-2.282a1.048 1.048 0 000-1.474l-1.033-1.027a.292.292 0 01-.034-.362 12.17 12.17 0 001.448-3.5.274.274 0 01.259-.217h1.463a1.045 1.045 0 001.044-1.044V69.06a1.046 1.046 0 00-1.044-1.044zm-9.443 1.033L141.893 72l-2.56-2.556 2.952-2.952a4 4 0 00-5.051 5.051l-3.124 3.124a7.678 7.678 0 112.64 2.609l3.139-3.139a4.006 4.006 0 004.956-5.089z"
        data-name="Path 23090"
        transform="translate(-126 -56.005)"
      ></path>
    </svg>
    </div>
    <p className='group-hover:text-black text-[11px]'>Setting</p>
    </div>
    </div>
  </div>
  <div className='mb-2 mt-4'>
  
    <div className='flex flex-col items-center  '>
    <div className='bg-[#0088f547] rounded-full  p-2 mt-2 flex justify-center'>
    {/* <AiFillMessage className='text-[#0088f5] text-xl'/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24.143"
      height="22.53"
      viewBox="0 0 24.143 22.53"
       className='text-[#0088f5] w-5 h-5'
    >
      <g data-name="Group 17973">
        <path
          fill="#0088f5"
           className='text-[#0088f5] w-5 h-5'
          d="M24.143 13.562c0 5.833-5.4 10.562-12.071 10.562a13.671 13.671 0 01-3.541-.462 22.035 22.035 0 01-6.309 1.862.392.392 0 01-.412-.546A16.085 16.085 0 002.971 20.5 9.812 9.812 0 010 13.562C0 7.729 5.4 3 12.071 3s12.072 4.729 12.072 10.562zm-16.6 0a1.509 1.509 0 10-1.509 1.509 1.509 1.509 0 001.511-1.509zm6.036 0a1.509 1.509 0 10-1.509 1.509 1.509 1.509 0 001.51-1.509zm4.527 1.509a1.509 1.509 0 10-1.506-1.509 1.509 1.509 0 001.507 1.509z"
          data-name="Path 23086"
          transform="translate(0 -3)"
        ></path>
      </g>
    </svg>
    </div>
   
    </div>
    
    <div className='p-2'>
    <HorizontalLine />
    </div>
    <div className='p-3' >
  {/* <h1 className='bg-black text-white p-2 mx-2 w-11 h-11 rounded-md'></h1> */}
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      className='  mx-3 w-11 h-11 '
    >
      <g data-name="Group 18108" transform="translate(-4124 -5023)">
        <rect
          width="58"
          height="58"
          data-name="Rectangle 4019"
          rx="12"
          transform="translate(4124 5023)"
        ></rect>
        <g
          fill="#fff"
          data-name="Group 18022"
          transform="translate(24.216 4.244)"
        >
          <path
            d="M37.379 25.633c-.172 0-.3.111-.385.375s-.061.223-.1.344c-.759 2.582-2.582 6.075-5.427 6.075-2.521 0-3.362-2.025-3.362-5.933V8.45c0-1.013-.375-1.63-1.175-1.63h-3.685c-.759 0-1.175.6-1.175 1.63V29.5c0 5.761 3.27 9.72 8.1 9.72 3.777 0 6.419-2.217 8.1-5a18.377 18.377 0 002.23-5.54 4.223 4.223 0 00.122-.77c.028-.657-2.868-2.277-3.243-2.277z"
            data-name="Path 23104"
            transform="translate(4108.101 5024.557)"
          ></path>
          <path
            d="M0 5.22s13.234 15.188 38.476 8.1l-.719 5.012S17.507 25.42-.04 13.523z"
            data-name="Path 23105"
            transform="translate(4107.824 5024.536)"
          ></path>
        </g>
      </g>
    </svg>
  </div>
  </div>
</div>
    </>
}

export default index
