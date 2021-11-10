import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe [] = [
        new Recipe('Yum Staek', 'Best Staek in the wilds of Philadelphia', 'https://www.thespruceeats.com/thmb/cOrfL1MrSMQwKX9adyrFHtclObI=/1331x998/smart/filters:no_upscale()/slow-grilled-beef-ribs-335856-Hero-5b8c4b33c9e77c007bc64595.jpg'),
        new Recipe('Live Chiggen', 'Couldnta kill it, so we market it as premium live', 'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg'),
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}