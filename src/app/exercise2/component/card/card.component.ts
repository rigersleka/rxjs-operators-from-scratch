import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Country } from '../../../country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'card',
  standalone: true,
  imports: [HttpClientModule, NgFor, ReactiveFormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private countryService: CountryService = inject(CountryService)
  // private currentCountry: Country

  ngOnInit(): void {

    this.countryService.getCurrentCountry()
      .subscribe(((c: Country) => {
        console.log(c)
        // this.currentCountry = c;
      }))
  }
}
