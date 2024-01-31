import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-[#4069b6] text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='my-4 mx-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='my-4 mx-10 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas