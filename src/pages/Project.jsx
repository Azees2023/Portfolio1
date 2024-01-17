import React from 'react'
import Certificate from './Certificate'

const Project = () => {
  return (
    <div className='w-full h-2/4 bg-black'>
      <h2 className='text-4xl py-2 text-cyan-500'>Certification</h2>
      <Certificate />
      <hr></hr>
      <br /><br />
      <div class="mb-6 lg:mb-0 w-[30%] ml-[500px]">
        <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex">
            <div class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
              data-te-ripple-init data-te-ripple-color="light">
              <img
               src={require('./Certificat/mercedes-eq-eqs-v297-exterior-hotspot-3302x1858-08-2022.avif')} 
               alt='/'
               className='' />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="mb-4 text-lg font-bold">Deign the car</h5>
            <p class="mb-6">
                1.this Project is Responsive website,whish shows the car details.
                2.Technology used HTML,CSS,Reactjs,Tailwindcss
            </p>
            <a href="https://main--subtle-pie-0e91e6.netlify.app/" 
                data-te-ripple-init data-te-ripple-color="light"
                class="cursor-pointer inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read more
            </a>

          </div>
        </div>
      </div>
      <br /><br />
    </div>
  )
}


export default Project


















