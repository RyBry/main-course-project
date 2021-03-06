import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient>();
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
        return this.ingredients.slice();
        /* slice returns a copy instead of the actual reference point.
        This is a way of keeping the database secure :D */
    }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredientlist: Ingredient[]){
        /* You could use a for loop here, but that is performance costly
        INSTEAD: Use the "spread" operator below (...) */
        this.ingredients.push(...ingredientlist);
        /* and at this point the ingredients have been updated, so update the copy everywhere */
        this.ingredientsChanged.emit(this.ingredients.slice());
      
      }


}