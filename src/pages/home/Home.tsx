import { useContext } from 'react';
import homeLogo from '../../assets/home.jfif'
import { AuthContext } from '../../contexts/AuthContext'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="bg-[url('./assets/bg-home5.jpg')] bg-center flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Dev Web</h2>
            <p className='text-xl'>Olá Dev {usuario.nome}!</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-[#4069b6] text-white py-2 px-4 hover:bg-[#3f93ff]/25 hover:text-white'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center p-10">
            <img src={homeLogo} alt="" className='w-2/3 rounded-[2000px] shadow-inner border-8 border-gray' />

          </div>
        </div>
      </div>
    <ListaPostagens />
    </>
  );
}

export default Home;