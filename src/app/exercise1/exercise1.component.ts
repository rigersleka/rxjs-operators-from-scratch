import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map, tap, withLatestFrom } from 'rxjs';

import { Country } from '../country.interface';

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
  private fb = inject(FormBuilder)

  country$: Observable<Country[]> = this.http.get<Country[]>(this.COUNTRY_URL)   // Observable of country data
  continentSelection$: Observable<string>
  countrySelection$: Observable<string | null>

  continentSelectCtrl: FormControl<string | null> = this.fb.control<string>('', Validators.required)
  countrySelectCtrl: FormControl<string | null> = this.fb.control<string>('', Validators.required)
  selectionForm: FormGroup = this.fb.group({
    continentSelect: this.continentSelectCtrl,
    countrySelect: this.countrySelectCtrl
  })
  countries: Country[] = []

  /* Solution 2: (old way: avoid) fill data by subscribing the url, use it in template by using *ngFor
    countries: Country[] = []
    currentCountry: string = ''
    currentContinent: string = ''
  */

  constructor() {
    //* BEST-Solution 1: Benefits of using tap: a) Register Data b) SPY (log/catch data) - console.log()
    // Implement automatic population of the country dropdown based on the selected continent.
    this.continentSelection$ = this.continentSelectCtrl.valueChanges.pipe(
      tap(console.log),
      // Combine continent selection with the latest list of countries from the HTTP request
      withLatestFrom(this.country$),

      // Transform the data into an array containing the selected continent and filtered countries
      map(([continent, countries]) => [
        continent, // Keep the selected continent as is
        countries.filter((c) => c.continent === continent),
      ]),

      tap((data) => console.log('FILTERED COUNTRIES:', data)),

      tap(([continent, filteredCountries]) => {
        this.countries = filteredCountries;
        this.countrySelectCtrl.setValue(filteredCountries[0].country)
      }),

      // Convert the selected continent into a 3-letter uppercase string
      map(([continent, country]) => continent.substring(0, 3).toUpperCase())
    );

    //* Solution 1 without automatic population of the country dropdown */
    /*
      this.continentSelection$ = this.continentSelectCtrl.valueChanges.pipe(
        tap(a => console.log(a)),
      Javascript trick to convert a value into a boolean !!
        filter((continent): continent is string => !!continent),
        map((continent) => continent.substring(0, 3).toUpperCase())
    )
    */

    this.countrySelection$ = this.countrySelectCtrl.valueChanges.pipe(
      tap(a => console.log("COUNTRY SELECTED:", a)) // Log country selection for debugging
    );

    //* Solution 2: old way (the new one ASYNC directly at TEMPLATE)
    /*
    this.country$
      .subscribe((data: Country[]) => {
        console.log(data)
        return this.countries = data
      })  // emit observable and give Country Data
    this.continentSelect.valueChanges
      .subscribe((newValue: string) => this.currentContinent = newValue)
    this.countrySelect.valueChanges
      .subscribe((newValue: string) => this.currentCountry = newValue)
    */
  }
}

/** Note!
   Instead of FormBuilder injection can use: new FormGroup({ ....})
   continentSelect = new FormControl() // formControlName in the template
  countrySelect = new FormControl()
 */
