import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <div class="card">
        <div class='card-body bg-dark text-light'>
          See a problem? Want a feature added? Create an issue on <a href="https://github.com/madigan/ncounter-ng2/issues" target="_blank">github.com</a>
        </div>
    </div>
  </footer>
  `
})
export class FooterComponent { }
