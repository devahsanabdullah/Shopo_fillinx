import Menu from '../components/Menu'
import LogoMenu from '../components/LogoMenu/index'
// import Info from './Info'
import AppBar from '../components/AppBar'
export default function Home() {
 
  return (
    <>
    <div className='flex flex-col h-full'>
      <div ><AppBar  /></div>
 <div className="flex justify-between w-full mt-5 h-full  ">
        <div className='w-[342px]'>
        <Menu />
     </div>
     <div className='w-[340px] ml-10 '>
     <LogoMenu/>
     </div>
     <div className='w-1/4 '>
     
     
     </div>
     {/* <Info /> */}
      </div>
    

    </div>
    </>
  )
}
