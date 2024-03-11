import React from 'react'
import logo from '../content/logo.svg'

export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <img src={logo} width="60px" alt=""/>
            <p>&copy; 2024 ВкусоДел. Все права защищены.</p>
        </div>
    </footer>
  )
}
