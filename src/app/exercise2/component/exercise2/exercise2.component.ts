import { CardComponent } from "../card/card.component";
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgFor } from "@angular/common";

@Component({
  selector: 'exercise2',
  standalone: true,
  imports: [HeaderComponent, CardComponent, NgFor],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  cards = ['']
}
