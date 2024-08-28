import React from 'react'

export default function container({children}) {
  return (
    <div className='max-w-6xl h-full m-auto'>
      {children}
    </div>
  )
}
