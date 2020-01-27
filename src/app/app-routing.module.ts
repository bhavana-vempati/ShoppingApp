import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartIconComponent} from './cart-icon/cart-icon.component'


const routes: Routes = [
  {path: '',component: ShoppingListComponent},
  {path: 'cart',component: CartIconComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
