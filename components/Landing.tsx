import Image from 'next/image'
import React from 'react'
import Button from './Button'


function Landing() {
  return (
    <main className="relative h-[165vh] bg-[#E7ECEE]">

    <section className='sticky top-0 mx-auto flex h-[60vh] max-w-[1350px] items-center justify-btween px-8 z-10'>
        <div className='space-y-8'>

            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-8xl z-10">
            
                <span className="block  bg-gradient-to-r from-[#C38314] to-[#4f4f4f]
                text-transparent bg-clip-text z-10">Delivery</span>
                
                <span className="block text-4xl md:text-4xl xl:text-6xl z-10">
                    24 Horas
                </span>
                
            </h1>

            <div className='space-x-6 z-10'>
               <Button title="Peça Já"/>
                <a className="link block pt-4 pl-2 lg:inline" href='https://www.google.com.br/'>Saiba Mais</a>
            </div>
        </div>

        <div className="relative  h-[450px] w-[450px] transition-all duration-500 
        md:inline lg:h-[550px] lg:w-[500px] z-10">
            <Image src="/chopp.png" layout="fill" objectFit="contain" priority alt='caneco de chopp'/>

        </div>
    </section>

    
  </main>
  )
}

export default Landing