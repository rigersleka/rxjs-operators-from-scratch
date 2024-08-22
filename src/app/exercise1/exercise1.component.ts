import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'exercise1',
  standalone: true,
  imports: [HttpClientModule, NgFor, ReactiveFormsModule, CommonModule],
  providers: [HttpClient],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  private http = inject(HttpClient)
  private COUNTRY_URL: string = `https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json` // static data
  country$: Observable<Country[]> = this.http.get<Country[]>(this.COUNTRY_URL)   // Observable of country data
  countries: Country[] = []           // fill data by subscribing the url, use it in template by using *ngFor

  continentSelection$: Observable<string>
  continentSelect = new FormControl() // formControlName in the template
  countrySelect = new FormControl()
  currentCountry: string = ''

  constructor() {
    this.country$
      .subscribe((data: Country[]) => this.countries = data)  // emit observable and give Country Data

    this.continentSelection$ = this.continentSelect.valueChanges // Observable of the latest continent selected
      .pipe(
        tap((continent: string) => console.log(continent)),
        map((continent: string) => continent.substring(0, 3).toUpperCase()))

    //* BEST-Solution 1: Benefits of using tap: register some data
    this.countrySelect.valueChanges
      .pipe(tap((country: string) => this.currentCountry = country))

    //* Solution 2: old way (avoid as much as possible subscribe)
    this.countrySelect.valueChanges
      .subscribe((newValue: string) => this.currentCountry = newValue)
  }
}

/**
  Note!
  Best way how to be declared a FormGroup/FormControl or FormBuilder/FormControl
  is in the exercise 4.
 */
