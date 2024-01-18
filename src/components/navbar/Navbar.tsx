import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-[#3f93ff] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Dev Web</div>

            <div className='flex gap-4'>
              <Link to='/login' className='font-bold cursor-pointer hover:text-[#242b2d]'>Login</Link>
              <Link to='/home' className='font-bold cursor-pointer hover:text-[#242b2d]'>Home</Link>
              <div className='font-bold cursor-pointer text-[#fde845] hover:text-[#2d2c24] animate-pulse'>Postagens</div>
              <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Temas</div>
              <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Cadastrar tema</div>
              <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Perfil</div>
              <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar