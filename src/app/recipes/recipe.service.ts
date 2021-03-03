import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}