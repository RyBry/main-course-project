import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://www.thespruceeats.com/thmb/cOrfL1MrSMQwKX9adyrFHtclObI=/1331x998/smart/filters:no_upscale()/slow-grilled-beef-ribs-335856-Hero-5b8c4b33c9e77c007bc64595.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://www.thespruceeats.com/thmb/cOrfL1MrSMQwKX9adyrFHtclObI=/1331x998/smart/filters:no_upscale()/slow-grilled-beef-ribs-335856-Hero-5b8c4b33c9e77c007bc64595.jpg'),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }
  
  onRecipeSelected(recipeReceived: Recipe){
    this.recipeWasSelected.emit(recipeReceived)
    console.log(recipeReceived.name);
  }
  ngOnInit(): void {
  }

}
