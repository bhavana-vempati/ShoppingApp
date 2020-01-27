import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    SidemenuComponent,
    ShoppingListComponent,
    FilterComponent,
    SortComponent,
    CartIconComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
