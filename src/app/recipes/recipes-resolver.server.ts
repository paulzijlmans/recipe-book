import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from '../store/app.reducer';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { FetchRecipes, SET_RECIPES } from './store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      this.store.dispatch(new FetchRecipes());
      return this.actions$.pipe(ofType(SET_RECIPES), take(1));
    } else {
      return recipes;
    }
  }
}
