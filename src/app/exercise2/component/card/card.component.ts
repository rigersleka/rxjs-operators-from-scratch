import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';

import { Country } from '../../../country.interface';
import { CountryService } from '../../service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'card',
  standalone: true,
  imports: [HttpClientModule, NgFor, ReactiveFormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private countryService: CountryService = inject(CountryService)
  @Input() index: number = 0
  currentCountry: Country = { continent: 'Europe', country: 'Netherlands' }

  ngOnInit(): void {
    this.countryService.getCurrentCountry()
      .subscribe(((c: Country) => {
        console.log(`CARD ${this.index} received ${c.country}`)
        console.log(c)
        this.currentCountry = c;
      }))
  }
}
