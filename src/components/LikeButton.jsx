import React, {useState} from 'react'
import like from '../content/like.svg'
import { recipes } from '../arrays_files/recipes';


export default function LikeButton(props) {
  const recipe = recipes.find((recipe) => recipe.id === props.id);
  const [likes, setLikes] = useState(recipe.likes)
  return (
    <button className='likeButton' onClick={()=>{recipe.likes++;setLikes(recipe.likes)}}>
      <img src={like} alt="" width={15} height={15}/>&nbsp;<span>{likes}</span>
    </button>
  )
}
