# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# RxJS from Scratch - POWERPOINT-SLIDE
https://docs.google.com/presentation/d/1jvYM8jXXPBN0-SnGPqh2IcDCehcTlDa_vWQh9jeuJ2c/edit?pli=1#slide=id.gfdbc511df0_0_104

- How can use .subscribe() ?
Reference: https://stackblitz.com/edit/at-rxjs-demo1?embed=1&file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts

- How to console.log() an Observable$ that is .subscribe() from template using pipe async?
Use pipe json. In template: <pre>{{( (observable$ | async) | json) }}</pre>

-What is best Operators Website to explain most important operators with diagrams? 
https://rxmarbles.com/

# Exercise 1: Dynamic Dropdowns using RxJS and ValueChanges
Reference: https://stackblitz.com/edit/at-rxjs-demo2?file=src%2Fapp%2Fapp.component.ts

Objective:
- Create two dropdowns—one for continents and another for countries.
- When Continent is selected -  display the 3characters of the selected continents, when country is selected
display the selected country

-Improvements: The country dropdown should dynamically update based on the selected continent.

Requirements:
Dropdown Implementation:

1. - Create a dropdown containing a list of continents.
   - Create a second dropdown containing a list of countries.
2.Fetching Data:
   - Use http.get to fetch an array of objects (country-continent data).
   - Subscribe to the data stream using Observable$ | async to populate the dropdowns.
3.Handling Selections:

   - Use ValueChanges to display the selected continent and country.
   - When the user selects a continent, the second dropdown should be automatically populated with the countries belonging to that continent.

4.   Technical Hints:
Use Angular’s HttpClient to fetch data asynchronously.
Leverage FormControl and ValueChanges for reactive form handling.
Filter the list of countries dynamically based on the selected continent.

5. TODO (Enhancement):
Implement automatic population of the country dropdown based on the selected continent.

* BONUS points if you can remove all calls to .subscribe()

# Exercise 2: TODO: Write the title
Reference: https://stackblitz.com/edit/at-rxjs-demo5?file=src%2Fapp%2Fapp.component.html
- How to emit data with RxJs? 
Create my own service which can get data using RxJs - CountryService
It's get/set methods in that Service

- How to create a function that subscribe to a face mock array-object to retrieve the data? 
Mock data retrieval via getCountryList(). Reactive updates through Observable.

