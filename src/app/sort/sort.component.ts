import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Input() shopList

  constructor() { }

  ngOnInit() {
  }
public orderBy(){
  document.getElementById("disc").classList.remove("active");
  document.getElementById("rev").classList.remove("active");
  let curr = document.getElementById("org");
  curr.className =  curr.className + ' active'
  this.shopList.sort((a, b)=>{return b.discountP-a.discountP});
}
public revOrderBy(){ 
  document.getElementById("disc").classList.remove("active");
  document.getElementById("org").classList.remove("active");
  let curr = document.getElementById("rev");
  curr.className =  curr.className + ' active'
  this.shopList.sort((a, b)=>{return a.discountP-b.discountP});
}
public oderByDiscount(){
  document.getElementById("org").classList.remove("active");
  document.getElementById("rev").classList.remove("active");
  let curr = document.getElementById("disc");
  curr.className =  curr.className + ' active'
  this.shopList.sort((a, b)=>{return b.discount-a.discount});
}
}
