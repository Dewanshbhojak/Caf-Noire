import React from 'react'
import Navbar from './navbar'
import Slideshow from './Slideshow'

const Items = () => {
  return (
    <div className='bg-[#3B2F2F]'>
      <Navbar />
      <Slideshow/>
      

     

         <p className='text-7xl text-[#ffdd] font-extrabold text-center py-10 underline decoration-4'> Our Menu</p>

<ul className='grid grid-cols-3 '>
  <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
      
    <div className=' w-100 h-100  border-amber-50 text-center bg-[url(/image/coffee.png)]  bg-center bg-cover  mb-5 rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Espresso</div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd] '>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
   <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
    <div className=' w-100 h-100  border-amber-50 text-center bg-[url(/image/cold_coffee.png)]  bg-center bg-cover  mb-5 rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Cold Coffee</div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd] '>Wide range of Steaming hot coffee to make you fresh and light</div>
          
  </li>
   <li className='py-10 px-10 hover:shadow-2xl rounded-4xl '>
    <div className=' w-100 h-100  border-amber-50 text-center bg-[url(/image/lattes.png)]  bg-center bg-cover rounded-t-2xl'>
          </div>
             <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Latte</div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd] '>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
   <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
    <div className=' w-100 h-110  border-amber-50 text-center bg-[url(/image/javachipfrappe.png)]  bg-center bg-cover rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Java chip Frappe </div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd] '>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
    <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
    <div className=' w-100 h-110  border-amber-50 text-center bg-[url(/image/Americano.png)]  bg-center bg-cover rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Americano </div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd]'>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
    <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
    <div className=' w-100 h-100  border-amber-50 text-center bg-[url(/image/Crossiant.png)]  bg-center bg-cover rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Crossiant </div>
          <div className='font-serif text-xl w-100 h-10 text-center '>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
    
    <li className='py-10 px-10 hover:shadow-2xl rounded-4xl'>
    <div className=' w-100 h-110  border-amber-50 text-center bg-[url(/image/blueberry.png)]  bg-center bg-cover rounded-t-2xl'>
          </div>
          <div className=' w-100 h-10 rounded-b-3xl text-center font-bold text-[#ffdd] text-3xl'> Blue Berry</div>
          <div className='font-serif text-xl w-100 h-10 text-center text-[#ffdd]'>Wide range of Steaming hot coffee to make you fresh and light</div>
  </li>
  
  
 
</ul>

   <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>

      </div>

    
  )
}

export default Items
