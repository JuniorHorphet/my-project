import React from 'react'
import Logo from '../../../media/svg/Logo-burger-house.svg' 
import Icone from '../../../media/svg/ico-bag-clickAndCollect.svg'
import Button from '../../element/Button'

export default function header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
       <div className='h-20 w-full'>
           <img src= {Logo} alt = 'burger-House-App' className='w-64'/> 
       </div>
       <div className='w-full text-secondary'>
          <div className='flex items-center justify-end pb-8'>
            <img src = {Icone} alt = '' className='w-5 h-5 mr-1'/>
            <span>Commander votre repas en ligne</span>
          </div>
          <div className='flex items-center justify-end'>
             <Button className = "mr-3 tracking-widest">
                Inscription
             </Button>
             <Button className = "tracking-widest" color="secondary">
                Connexion
             </Button>
          </div>
           
       </div>
       
    </div>
  )
}
