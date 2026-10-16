import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  version = '2.0.0';
  clicks = signal(0);

  incrementar() {
    this.clicks.update(valor => valor + 1);
  }
}
