import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../arrays_files/recipes';

import LikeButton from './LikeButton';

export default function RecipePage() {
  const { link } = useParams();

  const recipe = recipes.find((recipe) => recipe.link === link);

  useEffect(() => {
    if (recipe) {
      const howToCreateField = document.getElementById('htc');
      howToCreateField.innerHTML = recipe.howToCreate;
    }
  }, [recipe]);

  if (!recipe) {
    return <main><p className='recipe-nf'>Рецепт не найден</p></main>;
  }

  return (
    <main className='recipe-page'>
      <h1>{recipe.title}</h1>
      <img id='big_picture' src={recipe.picture} width={600} height={400} alt="" />
      <p className='descr'>{recipe.description}</p>
      <LikeButton likes={recipe.likes} id={recipe.id}/>
      <h3>Как приготовить</h3>
      <p id='htc'></p>
    </main>
  );
}
