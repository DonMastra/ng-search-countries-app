import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = "";
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  search() {
    this.hasError = false;
    this.countryService.searchCountry( this.term )
      .subscribe(
        ( countries ) => {
          console.log( countries );
          this.countries = countries;
        },
        (err) => {
          this.hasError = true;
          this.countries = [];
        });
  }

}
