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
  moneda!:string
  option!:string
}
