import homeLogo from '../../assets/home.jfif'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-[#242b2d] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Dev Web</h2>
              <p className='text-xl'>A rede segura para desenvolvedores.</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
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