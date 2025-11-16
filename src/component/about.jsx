import React from 'react'
import Navbar from "./navbar"
import "../index.css"
const about = () => {
  return (
    <div className='className= block  bg-fixed text-center bg-[#2E2A26] w-screen '>
     

        <Navbar />
  
          <h2 className="text-7xl font-extrabold text-[#ffdd] mt-20mb-6 underline decoration-2 mt-10">About Us</h2>
            <div className='flex justify-between items-center mr-10 '>
              <p className=" flex w-3xl m-10 px-10 py-10 text-[#ffdd] rounded-3xl  shadow-2xl text-lg">
            Café Noire, a part of Coffee Day Global Limited, is India’s favourite hangout for coffee and conversations.
            we strive to provide the best experience to our guests. Our coffees are sourced from thousands
            of small coffee planters, who made us who we are today and we're glad to be a part of their lives. We opened our first
            cafe in 1996 at Brigade Road in Bangalore – the youth and the young at heart immediately took to the cafe, and it continues
            to be one of the most happening places in the city. Café Noire company to the youth is a “hangout” spot where they meet people, make conversations,
            and have a whole lot of fun over steaming cups of great coffee.It's been an exciting journey since then to becoming the largest organised
            retail cafe chain in the country.
          </p>
          <div className='opacity-70 w-100 h-100 justify-center text-5xl border-5 rounded-full bg-[url(/image/espresso.jpg)] bg-cover bg-center  mr-30 shadow-2xl'>  </div>
          </div>

       
  
        
        <hr className='text-center mt-10 w-350 ml-17 text-[#ffdd] ' />

        <h2 className='text-5xl text-[#ffdd] font-extrabold py-10'>Beans To cup</h2>
        
        <div className='flex justify-between py-9'>
          <div className=' w-100 h-100  text-5xl border-5 rounded-full bg-[url(/image/about.jpg)] bg-cover bg-center  ml-20 bg-fixed bg-no-repeat shadow-2xl'>  </div>
          <p className=" flex w-3xl m-10 px-10 py-10 mt-5 text-[#ffdd]  rounded-3xl  shadow-2xl text-lg">
        Coffee making starts with fresh beans, which are carefully roasted to bring out their aroma and flavor. The roasted beans are then ground to the right consistency, depending on the brewing method.
         Hot water is poured or forced through the grounds, extracting the rich oils and flavors that define the taste of coffee. Finally, the brewed liquid is collected in a cup, ready to be enjoyed as a pure 
         black coffee or enhanced with milk, cream, or sugar. This journey—from beans to brew—captures the essence of coffee’s freshness and character.
          </p>
        </div>
       
      
          
      <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>
    
  )
}

export default about
