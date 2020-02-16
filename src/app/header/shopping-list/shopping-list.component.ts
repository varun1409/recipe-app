import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients:Ingredient[] = [new Ingredient("Test Ing 1", 25),
 new Ingredient("Test Ing 2", 55)];
  constructor() { }

  ngOnInit() {
  }

}
