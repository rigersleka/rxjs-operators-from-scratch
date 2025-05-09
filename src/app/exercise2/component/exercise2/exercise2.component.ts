import { CardComponent } from "../card/card.component";
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'exercise2',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component { }
