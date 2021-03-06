import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [
  ]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }


}
