import React from 'react';
import { recipes } from '../arrays_files/recipes';
import { NavLink } from 'react-router-dom';

export default function BigRecipe() {
  const recipesArray = Object.values(recipes);
  const maxLikesRecipe = recipesArray.reduce((maxRecipe, currentRecipe) => {
    return currentRecipe.likes > maxRecipe.likes ? currentRecipe : maxRecipe;
  }, recipesArray[0]);

  return (
    <NavLink to={`/recipes/${maxLikesRecipe.link}`}>
      <div className='topRecipe' >
        <img src={maxLikesRecipe.pictureBig} alt="" />
        <h4>{maxLikesRecipe.title}</h4>
        <p>{maxLikesRecipe.description}</p>
    </div>
    </NavLink>
    
  );
}
