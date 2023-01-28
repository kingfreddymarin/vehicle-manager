import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Vehicles';
  vehicles: any; // property to store the fetched data

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/vehicles')
      .subscribe(data => {
        this.vehicles = data;
        console.log(this.vehicles);
      });
  }}
