import { Component } from '@angular/core';
import { MenuLateralHeaderComponent } from './menu-lateral-header/menu-lateral-header.component';
import { MenuLateralOptionsComponent } from './menu-lateral-options/menu-lateral-options.component';

@Component({
  selector: 'app-menu-lateral',
  imports: [MenuLateralHeaderComponent,MenuLateralOptionsComponent],
  templateUrl: './menu-lateral.component.html',
})
export class MenuLateralComponent {

}
