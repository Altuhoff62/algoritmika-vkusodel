import React from 'react'
import logo from '../content/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const active_link = 'current'
  const normal_link = ''
  return (
    <header>
        <NavLink to='/' className="logo">
            <img src={logo} width="50px" alt=""/>
            <h2>ВкусоДел</h2>
        </NavLink>
        <ul className="navmenu">
            <li><NavLink to="/" className={({isActive})=> isActive ? active_link : normal_link}>Главная</NavLink></li>
            <li><NavLink to="algoritmika-vkusodel/recipes" className={({isActive})=> isActive ? active_link : normal_link}>Рецепты</NavLink></li>
            <li><NavLink to="algoritmika-vkusodel/about" className={({isActive})=> isActive ? active_link : normal_link}>О нас</NavLink></li>
        </ul>
    </header>
  )
}
