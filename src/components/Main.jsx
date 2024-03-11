import React from 'react'
import BigRecipe from './BigRecipe'
import Reviews from './Reviews'
import { NavLink } from 'react-router-dom'
// import RecipeList from './RecipeList'

export default function Main() {
  return (
    <main>
        <div className="greeting">
            <h2>Добро пожаловать на наш кулинарный портал!</h2>
            <p>
            Здесь вы найдете рецепты от лучших поваров нашего города.
             Мы – это команда талантливых и опытных поваров, которые любят свое дело
             и готовы поделиться своими знаниями и умениями с вами!
            </p>
        </div>
        <div className="popular">
            <h2>Популярное сегодня</h2>
            {/* <RecipeList/> */}
            <BigRecipe/>
            <NavLink to="/recipes"><button>Больше рецептов</button></NavLink>
        </div>
        <div className="reviews-cont">
            <h2>Отзывы наших пользователей</h2>
            <Reviews/>
        </div>
        
    </main>
  )
}
