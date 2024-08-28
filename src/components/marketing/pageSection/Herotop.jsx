import React from 'react'
import Illustration from '../../../media/images/background/bg-food.jpg'
import Container from '../../element/Container'
import Header from './Header'
import Product from '../../../media/images/HeroTop/burger-hero-top.png'
import Button from '../../element/Button'

export default function Herotop() {
  return (
    <div className='bg-primary w-full '>
      <div
        className='bg-repeat w-full h-full pb-40'
        style={{ backgroundImage: `url(${Illustration})` }} // Utilisation de backticks pour une interpolation correcte
      >
        <Container>
           <Header/>
          <div className='w-full relative mt-28'>
             <img src={Product} className='absolute z-0 -top-64 right-0 w-6/12' alt='un menu hamburger avec frites et coca cola'></img>
             <div className='absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3'>
              <div className='w-full h-full rounded-full text-white border-2 border-dashed flex items-center justify-center'>
                <div className='text-center'>
                  <span className='block font-extrabold'>
                   <span className='text-5xl'>5000</span>F
                   </span>
                   <span className='uppercase tracking-widest text-sm'> seulement </span>
                  
                </div>
                 
              </div>
             </div>
             
             
             <div className=' relative z-10 text-secondary uppercase'>
               <h1 className='mb-4 font-semibold'>C'est le moment de goûter au bon goût des hamburgers.</h1>
               <h2 className='font-secondary shadowTitleSecondary'> <span className='text-8xl block'>Burger</span> 
               <span className='text-6xl'>House</span> <span className='text-4xl ml-3'>Click<span className='text-red-primary'>&</span>Collect</span></h2>
             </div>
               
          </div>

           <Button className= "mt-5" color ="secondary" theme ="big">
              Créer mon compte
           </Button>
         </Container> 
      </div>
    </div>
  )
}
 