import React from 'react'
import DarkModeButton from './elements/DarkModeButton'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-8 bg-white border-b border-gray-200 shadow-custom-light">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <DarkModeButton />
    </header>
  
  )
}
