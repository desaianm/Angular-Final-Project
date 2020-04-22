import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Bananas', 12)
  ];

  getIngredients(){
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]){
    // tslint:disable-next-line: prefer-const
    /* for(let ingredient of this.ingredients){
      this.addIngredients(ingredient);
    } */
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
