import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

export interface Country {
  country: string;
  continent: string;
}
@Component({
  selector: 'exercise1',
  standalone: true,
  imports: [HttpClientModule, NgFor, ReactiveFormsModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  private COUNTRY_URL: string = `https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json` // static data
  private http = inject(HttpClient)

  //TODO: (look powerpoint slide 14) HTTP request to get the data could be created in another Service
  country$: Observable<Country[]> = this.http.get<Country[]>(this.COUNTRY_URL)   // Observable of country data
  continentSelection$: Observable<string>
  countrySelection$: Observable<string>

  continentSelect = new FormControl() // formControlName in the template
  countrySelect = new FormControl()

  //* Solution 2: (old way: avoid) fill data by subscribing the url, use it in template by using *ngFor
  countries: Country[] = []
  currentCountry: string = ''
  currentContinent: string = ''

  constructor() {
    //* BEST-Solution 1: Benefits of using tap: register some data & fire using ASYNC at template
    this.continentSelection$ = this.continentSelect.valueChanges // Observable of the latest continent selected
      .pipe(
        tap((continent: string) => console.log(continent)),
        map((continent: string) => continent.substring(0, 3).toUpperCase()))
    this.countrySelection$ = this.countrySelect.valueChanges // Observable of the latest country selected
      .pipe(tap((country: string) => country))

    //* Solution 2: old way (the new one ASYNC directly at TEMPLATE)
    this.country$
      .subscribe((data: Country[]) => {
        console.log(data)
        return this.countries = data
      })  // emit observable and give Country Data
    this.continentSelect.valueChanges
      .subscribe((newValue: string) => this.currentContinent = newValue)
    this.countrySelect.valueChanges
      .subscribe((newValue: string) => this.currentCountry = newValue)
  }
}

/**
  Note!
  Best way how to be declared a FormGroup/FormControl or FormBuilder/FormControl
  is in the exercise 4.
 */
