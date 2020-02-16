import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './header/ingredient/ingredient.component';
import { RecipeListComponent } from './header/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './header/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
