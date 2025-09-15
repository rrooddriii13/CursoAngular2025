import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  //poner standalone:true es como para decirle q es un compo q ala vez es un modulo  
})
export class AppComponent {
  title = 'Rodrigo';
}
