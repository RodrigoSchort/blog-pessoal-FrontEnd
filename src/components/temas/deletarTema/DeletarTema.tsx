import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Sua sessão expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Tema')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>
                <div className="flex">
                    <button className='my-4 mx-14 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded' onClick={retornar}>Não</button>
                    <button className='my-4 mx-14 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema