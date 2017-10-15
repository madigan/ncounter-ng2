import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class='row'>
    <div class='col-sm-12'>
      <header>
        <nav class='navbar navbar-inverse'>
          <div class='navbar-header'>
            <a class='navbar-brand' routerLink='/'>Home</a>
          </div>
          <ul class='nav navbar-nav'>
            <li><a routerLink='/quests' routerLinkActive='active'>Quests</a></li>
            <li><a routerLink='/bestiary' routerLinkActive='active'>Bestiary</a></li>
            <li><a routerLink='/roster' routerLinkActive='active'>Roster</a></li>
            <li><a routerLink='/fight' routerLinkActive='active'>Fight!</a></li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
  `
})
export class HeaderComponent { }
