import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <main>
      <div className="p404">
        <h1>404</h1>
        <p>Ничего не нашлось. <NavLink to='/' className='p404 link'>Вернуться на главную</NavLink></p>
        
      </div>
    </main>
  )
}
