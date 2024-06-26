import React from 'react'
import logo from '../content/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <NavLink to='algoritmika-vkusodel/' className="logo">
            <img src={logo} width="50px" alt=""/>
            <h2>ВкусоДел</h2>
        </NavLink>
        <ul className="navmenu">
            <li><NavLink to="algoritmika-vkusodel/">Главная</NavLink></li>
            <li><NavLink to="algoritmika-vkusodel/recipes">Рецепты</NavLink></li>
            <li><NavLink to="algoritmika-vkusodel/about">О нас</NavLink></li>
        </ul>
    </header>
  )
}
