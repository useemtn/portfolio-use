import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  standalone: true,  // Esto asegura que es standalone
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent {
  @Input() buttonText: string = 'Button'; // Texto del botón, por defecto es 'Button'
  @Input() link: string = '#';    
}
