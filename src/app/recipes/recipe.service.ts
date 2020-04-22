import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Simple Test','https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5103204fa52347d13d93119075487a67',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)

    ]),
    new Recipe('Test Recipe 2.0 ', 'This is a Simple Test','https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5103204fa52347d13d93119075487a67',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meaty', 2),
    ]),
  ];
  constructor(private slService: ShoppingListService){

  }
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredienttoShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }
  getRecipe(id: number){
    return this.recipes[id];
  }

}

