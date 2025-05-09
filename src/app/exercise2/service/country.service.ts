import { Observable, Subject, of } from 'rxjs';

import { Country } from '../../country.interface';
import { Injectable } from '@angular/core';
import { countries } from '../../country-mock.data';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country$: Subject<Country> = new Subject<Country>() // emit one country in a time
  // private country$: BehaviorSubject<Country> = new BehaviorSubject<Country>({country: 'Albania',continent: 'Europe'});

  setCurrentCountry(country: Country): void {
    this.country$.next(country);
  }

  getCurrentCountry(): Observable<Country> {
    return this.country$.asObservable();
  }

  getCountryList(): Observable<Country[]> {
    return of(countries)
  }

  /* Second solution to trigger data
    export const countryList$: Observable<Array<Country>> = of(countries)
  */
}
