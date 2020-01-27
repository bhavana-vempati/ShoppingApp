import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {
  public show = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public gohome(){
    this.router.navigate(['']);
  }
public goTo(){
  this.router.navigate(['cart']);
}
public search(){
 this.show =!this.show;
}
}
