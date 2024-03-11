import React from 'react'
import { NavLink } from 'react-router-dom'
import like from '../content/like.svg'

export default function RecipeCard(props) {
  return (
    <NavLink to={`/recipes/${props.link}`}>
      <div className='recipeCard'>
        <img src={props.img} width="280px" height='150px' alt=""/>
        <p>{props.title}</p>
        <p className='card-descr'>{props.descr}</p>
        <p className='like'><img  src={like} alt="" width={15} height={15}/>&nbsp;   {props.like}</p>
    </div>
    </NavLink>
    
  )
}
