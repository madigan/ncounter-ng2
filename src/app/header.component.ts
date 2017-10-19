import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class='navbar navbar-expand-sm navbar-dark bg-dark'>
    <a class='navbar-brand' routerLink='/'>Home</a>
    <div class='navbar-nav'>
      <a class='nav-link' routerLink='/quests' routerLinkActive='active'>Quests</a>
      <a class='nav-link' routerLink='/bestiary' routerLinkActive='active'>Bestiary</a>
      <a class='nav-link' routerLink='/roster' routerLinkActive='active'>Roster</a>
      <a class='nav-link' routerLink='/fight' routerLinkActive='active'>Fight!</a>
    </div>
    <a
      class='nav-link fa fa-gear icon-white'
      routerLink='/admin'
      routerLinkActive='active'>
    </a>
  </nav>
  `
})
export class HeaderComponent { }
