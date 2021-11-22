import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@ Injectable()
/* Since we have a service "ShoppingListService" bieng injected into this service,
we need to have this decorator injectable tag */
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){

    }

    private recipes: Recipe [] = [
        new Recipe('Yum Staek', 
        'Best Staek in the wilds of Philadelphia',
        'https://www.thespruceeats.com/thmb/cOrfL1MrSMQwKX9adyrFHtclObI=/1331x998/smart/filters:no_upscale()/slow-grilled-beef-ribs-335856-Hero-5b8c4b33c9e77c007bc64595.jpg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('Honey', 30),
            new Ingredient('Razer Blades', 10)
        ]),
        new Recipe('Live Chiggen', 
        'Could not kill it, but we managed to trap it', 
        'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg',
        [
            new Ingredient('Live (Mad) Chiggen', 100)
        ]),
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

}