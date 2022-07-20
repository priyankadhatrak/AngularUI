import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Receipe } from "./receipe.model";

@Injectable()
export class ReceipeService{
    receipeSelected = new EventEmitter<Receipe>();
    private receipes: Receipe[] = [
        new Receipe(
          'Fries',
          'Fast-Food and they are very tasty and addictive',
          'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/french-fries-1296x728-header.jpg?w=1155&h=1528',
          [
            new Ingredient('Potato',1),
            new Ingredient('Salt',1),
            new Ingredient('Water',2),
            new Ingredient('Oil',1)
          ]),
        new Receipe(
          'Pasta',
          'It is a main course and it has variety of pasta it is a pēnne pasta.',
          'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591',
          [
            new Ingredient('Penne Pasta',1),
            new Ingredient('water',1),
            new Ingredient('marinara sauce',1),
            new Ingredient('mushroom',7),
            new Ingredient('Parsley',1),
            new Ingredient('Dried Tomatoes',3)
          ])
      ];

      constructor(private slService: ShoppingListService){}

      getReceipe(){
        return this.receipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}