import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
    <search-bar></search-bar>
    <router-outlet></router-outlet>

  `
  
})
export class AppComponent {
  title = 'hotels-app';
}
