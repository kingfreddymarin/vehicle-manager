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

  deleteVehicle(placa: string) {
    this.http.delete('http://localhost:5000/api/vehicles/' + placa).subscribe(data=>{
      console.log("deleted: " + placa + '/' + data)
      location.reload()
    })
  }

  addVehicle(placa: string, marca: string, modelo: string, serie: string, color: string){
    this.http.post('http://localhost:5000/api/vehicles/', { placa, marca, modelo, serie, color })
      .subscribe(data => {
        console.log(data);
        location.reload()
      });
  }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/vehicles')
      .subscribe(data => {
        this.vehicles = data;
        console.log(this.vehicles);
      });
      
  }
}

  
