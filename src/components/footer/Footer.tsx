import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-[#397eff] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl'>Blog pessoal Dev Web | Copyright: Dev RodrigoSchort {data}</p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <a href="https://www.linkedin.com/in/rodrigo-schort/" target="_blank">
                <LinkedinLogo size={48} />
              </a>
              <a href="https://www.instagram.com/rodrigo_schort?igsh=eGgydTFranc5bm5s" target="_blank">
                <InstagramLogo size={48} />
              </a>
              <a href="https://www.facebook.com/rodrigo.schort.94/" target="_blank">
                <FacebookLogo size={48} />
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer