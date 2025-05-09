import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from "./exercise2/component/exercise2/exercise2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise1Component, Exercise2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
