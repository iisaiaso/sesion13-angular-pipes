import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'uso de pipes'
  valor!: string

  title2 = 'currency pipes'
  moneda!: string
  option!: string

  estudiante = [
    {
      "Nombre": "Diego",
      "Apellido": "Arica",
      "Casado": false,
      "Direccion": "Calle 35 # 43 28",
      "Telefono": 3859720
    },
    {
      "Nombre": "Kevin",
      "Apellido": "Bueno",
      "Casado": false,
      "Direccion": "CR 16A # 53 28",
      "Telefono": 31485579954
    },
    {
      "Nombre": "Natalia",
      "Apellido": "Palomino",
      "Casado": false,
      "Direccion": "CR 25 # 52 33",
      "Telefono": 32255945555
    }
  ]
}
