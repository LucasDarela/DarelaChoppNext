import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

function Contato() {
  return ( 
    <div className='flex flex-wrap px-14  md:h-[100vh] bg-[#E7ECEE]'>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">

        </div>
      </div>

      <div className="mt-10 sm:mt-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Entre em contato</h3>
              <p className="mt-1 text-sm text-gray-600">Deixe sua mensagem, retornaremos o mais breve possível</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">

            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-[#E7ECEE] px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Telefone</label>
                      <input type="tel" name="phone-number" id="phone-number" autoComplete="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>

                    
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Cidade</label>
                      <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Endereço</label>
                      <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>


                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">Estado</label>
                      <input type="text" name="region" id="region" autoComplete="address-level1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">CEP</label>
                      <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <div className="mt-1">
                      <textarea id="about" name="about" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm" placeholder="Digite sua mensagem..."></textarea>
                    </div>
                    {/* <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p> */}
                  </div>

                  </div>
                </div>
                <div className="bg-[#E7ECEE] px-4 py-3 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"> <FaTelegramPlane className='mr-2 mt-1'/> Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contato