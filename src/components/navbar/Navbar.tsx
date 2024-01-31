import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from "../../utils/toastAlert"



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Você foi deslogado com sucesso', 'sucesso');
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-[#397eff] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase animate-wiggle animate-infinite'>Dev Web</Link>

          <div className='flex gap-4'>
            <Link to='/postagens' className='font-bold cursor-pointer hover:text-[#2d2c24] animate-pulse'>Postagens</Link>
            <Link to='/temas' className='font-bold cursor-pointer hover:text-[#242b2d]'>Temas</Link>
            <Link to='/cadastroTema' className='font-bold cursor-pointer hover:text-[#242b2d]'>Cadastrar tema</Link>
            <Link to='/perfil' className='font-bold cursor-pointer hover:text-[#242b2d]'>Perfil</Link>
            <Link to='' onClick={logout} className='font-bold cursor-pointer hover:text-[#242b2d]'>Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar