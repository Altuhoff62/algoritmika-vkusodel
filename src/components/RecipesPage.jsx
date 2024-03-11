import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../arrays_files/recipes';

export default function RecipesPage() {
  const [sortCriteria, setSortCriteria] = useState('popular');
  const [typeCriteria, setTypeCriteria] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  
  

  let recipesArray

  if(typeCriteria==='all' && sortCriteria==='popular'&&searchValue===''){
    recipesArray = Object.values(recipes).reverse()
  }

  const handleClear = () => {
    setSearchValue('');
  };

  const handleTypeChange = (e) => {
    setTypeCriteria(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  const filterRecipes = (recipes, typeCriteria, sortCriteria, searchValue) => {
    let filteredRecipes = Object.values(recipes);
  
    if (typeCriteria !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.type === typeCriteria);
    }
  
    if (searchValue !== '') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
  
    switch (sortCriteria) {
      case 'popular':
        filteredRecipes.sort((a, b) => b.likes - a.likes);
        break;
      case 'unpopular':
        filteredRecipes.sort((a, b) => a.likes - b.likes);
        break;
      case 'new':
        filteredRecipes.reverse();
        break;
      case 'old':
        filteredRecipes.reverse().reverse();
        break;
      case 'name':
        filteredRecipes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
  
    return filteredRecipes;
  };
  
  recipesArray = filterRecipes(recipes, typeCriteria, sortCriteria, searchValue);
  
  
  return (
    <main>
      <div className="sort-search">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Найти рецепт"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <input className="search-btn" type="button" value="X" onClick={handleClear} />
        </form>
        <div className='form-sort-type'>
          <form className="sort-cont" onChange={handleTypeChange}>
          <select className="type" id="sortList" name="type">
            <option value="all">Все</option>
            <option value="hot">Горячее</option>
            <option value="soup">Супы</option>
            <option value="snack">Закуски</option>
            <option value="salad">Салаты</option>
            <option value="dessert">Десерты</option>
            <option value="drink">Напитки</option>
          </select>
          </form>
          <form>
          <select className="sort" id="sortList" name="sort" onChange={handleSortChange}>
            <option value="popular">Сначала популярные</option>
            <option value="unpopular">Сначала непопулярные</option>
            <option value="new">Сначала новые</option>
            <option value="old">Сначала старые</option>
            <option value="name">По названию</option>
          </select>
        </form>
        </div>
        
      </div>
  
      <div>
        <div className="recipe-list">
        {recipesArray.length === 0 ? <div className='none-text'>Здесь ничего нет</div> : null}
          {recipesArray.map((recipe, index) => (
            <div key={recipe.id}>
              <RecipeCard
                like={recipe.likes}
                link={recipe.link}
                img={recipe.picture}
                title={recipe.title}
                descr={recipe.description}
              />
            </div>
          ))}
          
        </div>
      </div>
    </main>
  );
}
