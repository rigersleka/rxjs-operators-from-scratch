# Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# RxJS from Scratch - POWERPOINT-SLIDE
https://docs.google.com/presentation/d/1jvYM8jXXPBN0-SnGPqh2IcDCehcTlDa_vWQh9jeuJ2c/edit?pli=1#slide=id.gfdbc511df0_0_104

Learning by answering different questions:
- What is RxJS(reactiveX for Javascript)? 

- Where we use Observables? Url_browsers, Form Input value, Http request completes

- How can use .subscribe() ?
Reference: https://stackblitz.com/edit/at-rxjs-demo1?embed=1&file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts

-What is valueChanges?

- What is HttClient?

- What is Operators? .pipe() etc...

- What is Tap and which are the real benefits of it?

- How to console.log() an Observable$ that is .subscribe() from template using pipe async?
Use pipe json. In template: <pre>{{( (observable$ | async) | json) }}</pre>

-What is best Operators Website to explain most important RXjs operators with diagrams? 
https://rxmarbles.com/

-What is importance of tap()? Debugging (as a spy) and to register data 

# Exercise 1: Dynamic Dropdowns using RxJS and ValueChanges
Reference: 
Basics -> https://stackblitz.com/edit/at-rxjs-demo2?file=src%2Fapp%2Fapp.component.ts
Advance (country dropdown will be populated after continent is selected) -> 
https://stackblitz.com/edit/at-rxjs-demo4?file=src%2Fapp%2Fapp.component.ts

Objective of implementation:
- Create two dropdowns—one for continents and another for countries.
- After a Continent is selected -  display 3-characters of the selected continents. When country is selected
display the selected country

- Improvement: The country dropdown should dynamically update based on the selected continent.
Dropdown 2 data vary from the dropdown 1

Requirements:
Dropdown Implementation:

1. - Create a dropdown containing a list of continents.
   - Create a second dropdown containing a list of countries.
2. -Fetching Data:
    - Use http.get to fetch an array of objects (country-continent data).
    - Subscribe to the data stream using Observable$ | async to populate the dropdowns.
3. - Handling Selections:
    - Use ValueChanges to display the selected continent and country.
    - When the user selects a continent, the second dropdown should be automatically populated with the countries belonging to that continent.

4. Make dropdown Truly REACTIVE.
Implement automatic population of the country dropdown based on the selected continent.

* BONUS points if you can remove all calls to .subscribe()

# Exercise 2: TODO: Write the title
Reference: https://stackblitz.com/edit/at-rxjs-demo5?file=src%2Fapp%2Fapp.component.html
- How to emit data with RxJs? 
Create my own service which can get data using RxJs - CountryService
get/set methods created in that Service

- How to create a function that subscribe to a face mock array-object to retrieve the data? 
Mock data retrieval via getCountryList(). Reactive updates through Observable.

//TODO
- Read quick and check what have to be added in the first Exercise
- Finish the second Exercise
- Prepare to do the third
