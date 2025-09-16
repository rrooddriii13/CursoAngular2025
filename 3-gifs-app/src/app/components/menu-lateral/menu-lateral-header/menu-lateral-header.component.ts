import { Component } from '@angular/core';
import { environment } from '../../../../env/enviroment';
// import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-menu-lateral-header',
  imports: [],
  templateUrl: './menu-lateral-header.component.html',
})
export class MenuLateralHeaderComponent {
   envs = environment;
}