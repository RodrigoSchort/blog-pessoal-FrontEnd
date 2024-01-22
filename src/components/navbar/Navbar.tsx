import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent


  return (
    <>
      <div className='w-full bg-[#3f93ff] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Dev Web</Link>

          <div className='flex gap-4'>
            <div className='font-bold cursor-pointer text-[#fde845] hover:text-[#2d2c24] animate-pulse'>Postagens</div>
            <Link to='/temas' className='font-bold cursor-pointer hover:text-[#242b2d]'>Temas</Link>
            <Link to='/cadastroTema' className='font-bold cursor-pointer hover:text-[#242b2d]'>Cadastrar tema</Link>
            <div className='font-bold cursor-pointer hover:text-[#242b2d]'>Perfil</div>
            <Link to='' onClick={logout} className='font-bold cursor-pointer hover:text-[#242b2d]'>Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar