import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, tap, withLatestFrom } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'exercise2',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  private readonly COUNTRY_URL = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json'
  private http = inject(HttpClient)
  private fb = inject(FormBuilder)

  country$: Observable<Country[]> = this.http.get<Country[]>(this.COUNTRY_URL)     //Observable of country data, subscribed to TEMPLATE
  continent$: Observable<string>
  currentCountry$: Observable<string | null>
  countries: Array<Country> = []

  continentSelectCtrl: FormControl<string | null> = this.fb.control<string>('', Validators.required)
  countrySelectCtrl: FormControl<string | null> = this.fb.control<string>('', Validators.required)
  selectionForm: FormGroup = this.fb.group({                                     //instead of FormBuilder injection can use: new FormGroup({ ....})
    continentSelect: this.continentSelectCtrl,                                   //if you don't need to do any manipulation in controller, can set also: continentSelect: ['', Validation.required]
    countrySelect: this.countrySelectCtrl
  })

  constructor() {
    this.continent$ = this.continentSelectCtrl.valueChanges.pipe(      //Observable of the latest continent selected
      tap(console.log),
      withLatestFrom(this.country$),                                   // Combine continent selection with the latest list of countries came from HttpRequest
      map(([continent, countries]) => [                               // Now we have an array of two values, first the continent, second the countries
        continent,                                                    // We return a new array with the continent in first position (untouched)
        countries.filter((c) => c.continent == continent),            // And a filtered list of countries (by continent) in second position
      ]),
      tap(console.log),                                             // easy to explore data
      tap(([continent, filteredCountries]) => {                     // TAP() SPY(register) THE DATA and do sth. The data at that point is: 1) selected continent 2) countries of that continent.
        this.countries = filteredCountries;                         // Assign the filtered countries to a component property used by the dropdown
        this.countrySelectCtrl.setValue(filteredCountries[0].country);  // Select the first country by default (cheat)
      }),
      map(([continent]) => continent.substring(0, 3).toUpperCase()) // Finally, turn our continent into a 3-letter uppercase string
      // We don't subscribe anymore. The async pipe is doing that on our HTML template.
    );

    this.currentCountry$ = this.countrySelectCtrl.valueChanges.pipe(tap(currentCountry => currentCountry))
  }
}
