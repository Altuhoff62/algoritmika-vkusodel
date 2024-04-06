import React from 'react'
import { NavLink } from 'react-router-dom'
import like from '../content/like.svg'


export default function RecipeCard(props) {
  return (
    <NavLink to={`/algoritmika-vkusodel/recipes/${props.link}`}>
      <div className='recipeCard'>
        <img src={props.img} width="280px" height='150px' alt=""/>
        <p>{props.title}</p>
        <p className='card-descr'>{props.descr}</p>
        <p className='likes_count'><img id='like_symb' src={like} alt="" width={15} height={15}/>&nbsp;{props.like}</p>
    </div>
    </NavLink>
    
  )
}
