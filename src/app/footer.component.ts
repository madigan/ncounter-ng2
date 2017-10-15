import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class='row'>
    <div class='col-xs-12'>
      <footer class='footer'>
        <div class="panel panel-info">
            <div class='panel-footer'>
              See a problem? Want a feature added? Create an issue on <a href="https://github.com/madigan/ncounter-ng2/issues" target="_blank">github.com</a>
            </div>
        </div>
      </footer>
    </div>
  </div>
  `
})
export class FooterComponent { }
