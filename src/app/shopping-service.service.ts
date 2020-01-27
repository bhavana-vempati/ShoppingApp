import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  apiURL: string = 'https://api.myjson.com/bins/qzuzi';

  constructor(private httpClient: HttpClient) { 
  }
public getList(){
 return this.httpClient.get(this.apiURL);
}
}
