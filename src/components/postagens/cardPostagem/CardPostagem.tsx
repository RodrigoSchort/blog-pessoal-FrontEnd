import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='shadow-lg border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-[#4069b6] py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-white text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='my-4 mx-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='my-4 mx-10 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem