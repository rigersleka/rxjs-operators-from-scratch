import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Country } from '../../country.interface';

// How to emit Data using RXJs?
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // private country$: Subject<Country> = new Subject<Country>()
  private country$: BehaviorSubject<Country> = new BehaviorSubject<Country>({
    country: 'Albania',
    continent: 'Europe'
  });

  setCurrentCountry(country: Country): void {
    this.country$.next(country);
  }

  getCurrentCountry(): Observable<Country> {
    return this.country$.asObservable();
  }
}
