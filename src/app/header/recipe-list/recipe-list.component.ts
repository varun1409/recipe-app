import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 
    'https://cdn.apartmenttherapy.info/image/upload/v1567541461/k/Photo/Recipes/2019-09-how-to-shrimp-alfredo/HT-Shrimp-Alfredo_103.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
