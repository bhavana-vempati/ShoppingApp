import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {ShoppingServiceService} from '../shopping-service.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public data : any
  public minVal = 100;
  public tempArr; 
  public cartData = [];

  constructor(private shopList: ShoppingServiceService) { 
 
  }

  ngOnInit() {
    this.shopList.getList().subscribe((res)=>{
      this.data = res;
      this.data.forEach(element => {
        element['discountP'] = (element.price *(100-element.discount))/100;
        element['quantity'] = 0;
      });
      this.tempArr = res;
      if(this.data!= undefined){
        if(this.data.length>0){
        this.data.sort((a, b)=>{return b.discountP-a.discountP});
        }
      }
    });
   
  
  }
public filterVal(event) {
  this.data = this.tempArr;
  let Data = this.data.filter(element => {
    if (this.minVal<=element.discountP && element.discountP<=parseInt(event)){
      return element;
    } else if(this.minVal ===parseInt(event)){
      return element;
    }
  })
  this.data = Data
}
public addtoCart(el){
  if(!!localStorage.getItem('cart')){
    this.cartData = JSON.parse(localStorage.getItem('cart'));
  }
  let a;
  if(this.cartData.length>0){
    for(let i=0 ;i <this.cartData.length; i++){
      if(el.id == this.cartData[i].id){
        a= el
        this.cartData[i].quantity= parseInt(this.cartData[i].quantity) + 1
      }
    }
    if(a===undefined){
      el.quantity = parseInt(el.quantity) + 1;
      this.cartData.push(el);
    }
  } else if(this.cartData.length== 0){
    el.quantity = parseInt(el.quantity) + 1;
    this.cartData.push(el)
  }
  console.log(this.cartData);
  localStorage.setItem('cart', JSON.stringify(this.cartData));
}
}
