import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //poner standalone:true es como para decirle q es un compo q ala vez es un modulo  
})
export class AppComponent {
  title = 'Rodrigo';
}
