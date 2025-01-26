import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {BubblesBackgroundComponent} from "./bubbles-background/bubbles-background.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, MainComponentComponent, FooterComponentComponent, BubblesBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
