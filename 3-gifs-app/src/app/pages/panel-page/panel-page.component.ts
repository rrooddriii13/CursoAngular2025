import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';

@Component({
    selector: 'app-panel-page',
    imports: [RouterOutlet, MenuLateralComponent],
    templateUrl: './panel-page.component.html',
})
export default class PanelPageComponent {}