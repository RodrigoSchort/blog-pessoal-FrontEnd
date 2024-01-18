import React, { useContext } from 'react';
import homeLogo from '../../assets/home.jfif'
import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { nome, setNome } = useContext(UserContext);

  return (
    <>
      <div className="bg-[url('./assets/bg-home.jpg')] flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Dev Web</h2>
            <p className='text-xl'>Olá dev {nome} .</p>

            <div className="flex justify-around gap-4">

              <button className='rounded bg-[#4b73bd] text-white py-2 px-4 hover:bg-[#3f93ff]/25 hover:text-white animate-bounce'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={homeLogo} alt="" className='w-2/3 rounded-[30px] p-4' />

          </div>
        </div>
      </div>

    </>
  );
}

export default Home;