import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeinput = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a Simple Test','https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5103204fa52347d13d93119075487a67'),
    new Recipe('Test Recipe 2.0 ','This is a Simple Test','https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=1000&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5103204fa52347d13d93119075487a67')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeinput.emit(recipe);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
