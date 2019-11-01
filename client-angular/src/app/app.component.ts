import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: Object[];
  private BASE_URL: string = '/api/products';
  constructor(private http: HttpClient){}
  visua(): void{
    this.http.get<Product []>("https://3000-b98d3515-aec7-47c1-b151-8522d4ac6c35.ws-eu0.gitpod.io/api/products").subscribe((data: Product[]) =>{
      this.results = data['products'];
    });
  }
}
