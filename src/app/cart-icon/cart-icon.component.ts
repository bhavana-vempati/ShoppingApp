import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
public data = JSON.parse(localStorage.getItem('cart'));
public totalPrice = 0;
public discount;
public payable;
  constructor() { }

  ngOnInit() {
    this.calc()
    
  }
  public calc(){
    this.totalPrice = 0
    this.payable = 0;
    this.discount = 0;
    this.data.forEach(element => {
      this.totalPrice = this.totalPrice+ (parseInt(element.price)*parseInt(element.quantity));
      this.payable += (parseInt(element.discountP)*parseInt(element.quantity));
   });
   this.discount = this.totalPrice - this.payable;
  }
public onPlus(el){
  let quant = <HTMLInputElement>document.getElementById(el.id);
  el.quantity = parseInt(quant.value) +1;
  this.calc();
  localStorage.setItem('cart', JSON.stringify(this.data));
  console.log(this.data);
}
public onMinus(el){
  let quanti = <HTMLInputElement>document.getElementById(el.id);
  if(parseInt(el.quantity)>0){
    el.quantity = parseInt(quanti.value) -1;
  }
  this.calc();
  localStorage.setItem('cart', JSON.stringify(this.data));
  console.log(this.data);
}
public remove(el){
  this.data.forEach(element => {
    if(element.id===el.id){
      this.data.pop(el);
    }
  });
  this.calc();
  localStorage.setItem('cart', JSON.stringify(this.data));
}
}
