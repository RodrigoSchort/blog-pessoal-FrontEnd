import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/login.jfif'
import defaultImage from '../../assets/image-default.jpeg'
import { toastAlerta } from '../../utils/toastAlert'

function Perfil() {
  let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)
    const [fotoPerfil, setFotoPerfil] = useState(usuario.foto || defaultImage)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token])
    
  return (
    <div className='container mx-auto mt-4 mb-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-60 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={fotoPerfil} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil