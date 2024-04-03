import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeteComponent } from './mete/mete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
}
