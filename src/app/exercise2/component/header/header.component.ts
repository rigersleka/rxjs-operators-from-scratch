import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Country } from '../../../country.interface';
import { CountryService } from '../../service/country.service';
import { map } from 'rxjs';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  countryService = inject(CountryService)
  countriesStore: Country[] = []

  constructor() {
    this.countryService.getCountryList()
      .pipe(
        map((countriesData: Country[]) => {
          const countriesStartWithD: Country[] = countriesData.filter((c: Country) => c.country.startsWith('D'))

          return countriesStartWithD
        }))
      .subscribe((countriesResponse: Country[]) => (this.countriesStore = countriesResponse))
  }

  onCountrySelected(country: Country): void {
    this.countryService.setCurrentCountry(country)
  }
}
