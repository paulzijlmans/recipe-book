import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test!',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'The second recipe',
      'This is awesome!',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
