import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'physique-calculator-web';
}
