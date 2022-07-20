import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private slservice: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingname = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingname, ingamount);
    this.slservice.addIngredient(newIngredient);
  }
}
