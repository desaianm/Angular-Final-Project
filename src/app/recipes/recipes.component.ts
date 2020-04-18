import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedrecipe: Recipe;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit(){
  this.recipeservice.recipeSelected
    .subscribe((recipe: Recipe) => {
      this.selectedrecipe = recipe
    }
    );
  }

}
