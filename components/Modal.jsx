import Link from 'next/link';
import React from 'react'

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='overlay z-50'>
        <div className='modalContainer'>
            {/* <img className="imgModal"src={chopp} alt=""/> */}
            <div className="modalRight grid content-center">
                <p onClick={onClose} className="closeBtn">x</p>
                <div className="btnContainer grid gap-8 content-around">
                  <Link href='https://api.whatsapp.com/send?phone=5548999900074&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20fazer%20um%20pedido.'>
                  <a target="_blank">
                    <button className='cursor-pointer items-center justify-center overflow-hidden rounded
                     bg-indigo-600 bg-gradient-to-r from-[#059315] to-[#003706] px-10 py-2 
                      text-white transition-all duration-300 focus:outline-none text-xl font-bold'>Criciúma <br/>
                        <span className='font-thin text-sm'>região e litoral</span>
                    </button>
                    </a>
                  </Link>  

                  <Link href='https://api.whatsapp.com/send?phone=5548999177835&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20fazer%20um%20pedido.' >
                    <a target="_blank">
                    <button className='cursor-pointer items-center justify-center overflow-hidden rounded
                     bg-indigo-600 bg-gradient-to-r from-[#059315] to-[#003706] px-10 py-2 
                      text-white transition-all duration-300 focus:outline-none mt-4 text-xl font-bold'>Tubarão <br />
                    <span className='font-thin text-sm'>região e litoral</span>
                    </button>
                    </a>
                    </Link> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal;